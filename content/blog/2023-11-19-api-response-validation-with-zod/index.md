---
title: "API Response validation with Zod"
authors: ["Bartosz Łaniewski"]
keywords: ["JavaScript", "TypeScript"]
language: en
dateCreated: 2023-11-20 00:00:00 +0100
dateUpdated: 2023-12-01 00:00:00 +0100
datePublished: 2023-11-20 00:00:00 +0100
---

When implementing applications, we often need to communicate with external services via APIs. In such cases, it’s crucial to ensure that the data received from these APIs is valid and conforms to the expected format. It’s essential for maintaining the integrity and functionality of various systems.

## What is Zod

[Zod](https://github.com/colinhacks/zod) is a TypeScript-first schema declaration and validation library. It provides an elegant and expressive syntax for defining data schemas and validating data against those schemas in the runtime. Here’s a simple example using TypeScript:

```ts
import { z } from "zod";

const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  login: z.string(),
  createdAt: z.string().datetime(),
  deletedAt: z.string().datetime().nullable(),
});

const userData = {
  id: "3f740a80-0af0-4976-9bad-db83b15c7bf7",
  email: "jan.kowalski@example.com",
  login: "jan.kowalski",
  createdAt: "2020-01-01T00:00:00Z",
  deletedAt: null,
};

try {
  const validatedUser = userSchema.parse(userData);

  console.log(validatedUser);
} catch (error) {
  console.error(error.errors);
}
```

In this example, `userSchema` defines a schema for user data, specifying the expected types and constraints for each field. The `parse` method is then used to validate the `userData` object against the schema. If validation fails, an error is thrown with details about the validation errors.

## Why use Zod

- **Type Safety:** Zod integrates seamlessly with TypeScript, providing strong type checking at compile-time. This helps to catch potential issues early in the development process.

- **Error Reporting:** When validation fails in the run-time, Zod provides detailed error messages, including information about the specific fields that didn’t pass validation. This aids in diagnosing and fixing issues efficiently.

- **Readability and Expressiveness:** Zod’s syntax is clean and expressive, making it easy to define and understand complex data structures. This enhances code readability and maintainability.

- **Flexibility:** Zod allows you to create sophisticated validation rules, including custom validation functions, conditional validation, and more. This flexibility is valuable when dealing with diverse and evolving data structures.

## How to use Zod

In a real application, I’d encourage encapsulating the utilization of Zod within a generic helper function. Let’s examine a refined implementation:

```ts
// api/validator.ts
import { z, ZodIssue } from "zod";

interface ValidateConfig<T extends z.ZodTypeAny> {
  dto: unknown;
  schema: T;
  schemaName: string;
}

export function validateSchema<T extends z.ZodTypeAny>(
  config: ValidateConfig<T>
): z.infer<T> {
  const { data, success, error } = config.schema.safeParse(config.dto);

  if (success) {
    return data;
  } else {
    captureError(`API Validation Error: ${config.schemaName}`, {
      dto: config.dto,
      error: error.message,
      issues: error.issues,
    });

    throw error;
  }
}

function captureError(message: string, extra = {}): void {
  if (__DEV__) {
    console.error(message, extra);
  } else {
    // TODO: report to Sentry/something else
  }
}
```

This helper function takes a data transfer object (DTO), a Zod schema, and a schema name as arguments. It then validates the DTO against the schema and returns the validated data if validation succeeds. If validation fails, it logs an error message and throws an error.

With such a function ready, we only have to define a schema for each API response and use the helper function to validate the response data. Here’s an example of how that could look like:

```ts
// api/requests/v1/accountDetails/schema.ts
import { z } from "zod";

export const schema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  login: z.string(),
  createdAt: z.string().datetime(),
  deletedAt: z.string().datetime().nullable(),
});
```

```ts
// api/requests/v1/accountDetails/types.ts
import { z } from "zod";
import { schema } from "./schema";

export type AccountDetailsResponse = z.infer<typeof schema>;
export type AccountDetailsErrorResponse = Record<string, unknown>;
```

```ts {8-10}
// api/requests/v1/accountDetails/request.ts
import { apiClient } from "@/api/client";
import { validateSchema } from "@/api/validator";

import { schema } from "./schema";
import { AccountDetailsResponse } from "./types";

function validate(dto: unknown): AccountDetailsResponse {
  return validateSchema({ dto, schema, schemaName: "v1/account/details" });
}

export async function getAccountDetails(): Promise<AccountDetailsResponse> {
  const response = await apiClient.get("/api/v1/account/details");

  return validate(response.data);
}
```

## Conclusion

API response validation is a critical aspect of building reliable and robust applications. Zod, with its TypeScript-first approach and expressive syntax, simplifies the process of defining and enforcing data schemas.

By incorporating Zod into your workflow, you can enhance the integrity of your APIs, catch potential issues early, and ensure that your application communicates seamlessly with external services.
