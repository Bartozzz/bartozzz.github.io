---
layout     : article
author     : Bartosz Łaniewski
title      : Bitcoin – origine et fonctionnement
date       : 2018-03-05 00:00:00 +0100
lang       : fr
categories : publication
keywords   :
  - Bitcoin
  - Blockchain
  - Cryptocurrency
---

Le Bitcoin est l’une des premières cryptomonnaies utilisant un réseau de type paire-à-paire et des systèmes cryptographiques sophistiqués. Elle est aujourd’hui évaluée à une valeur nette de plus de [185 milliards de dollars][1]. Ce document traitera des origines du Bitcoin, mais aussi de l’implémentation des technologies utilisés dans cette monnaie.

* Do not remove this line (it will not be displayed)
{:toc}

## Les origines du Bitcoin

Les origines du Bitcoin remontent à fin 2008. En août, le nom de domaine [bitcoin.org est enregistré][2] et c’est le 1<sup>er</sup> novembre 2008 qu’est publié le livre blanc qui pose les bases de la crypto-monnaie. Nommé [«_Bitcoin: un système de monnaie électronique paire-à-paire_»][3], c’est dans celui-ci qu’est évoqué pour la première fois un système monétaire entièrement [décentralisé et sécurisé][4]. Le livre blanc fut ensuite posté sur une mailing list dédiée à la cryptographie pendant la même période. C’est ici que le projet attira l’attention des spécialistes du milieu.

### L’auteur du Bitcoin: Satoshi Nakamoto

Satoshi Nakamoto, l’auteur du Bitcoin, reste encore inconnu à ce jour. Il pourrait aussi bien s’agir d’une seule personne que d’un groupe de plusieurs personnes disséminées à travers le monde. Son profil, tel qu’il apparaît sur un site traitant des systèmes pair-à-pair ([_P2P Foundation_](http://p2pfoundation.ning.com/profile/SatoshiNakamoto)), indique qu’il s’agit d’un homme d’origine japonaise. Toutefois, ces informations pourraient très bien être fabriquées – son anglais parfait remet en question ses origines. De plus, aucune preuve concrète n’a jamais été donnée quant à son identité.

Il est aussi la première personne à avoir mis en ligne un client Bitcoin et à émettre la première transaction le 3 janvier 2009. Il a miné les 50 premiers Bitcoins dans le _genesis block_ – un bloc unique en ce qu’il ne contient aucune référence à un bloc précédent. Ainsi, les transactions faites jusqu’à ce jour intègrent l’historique de chaque transaction effectuée depuis ce premier bloc. Le jour même, Satoshi envoya 10 Bitcoins à un certain Hal Finney.

S’il est l’inventeur du Bitcoin et a écrit le code source originel, Satoshi Nakamoto s’est aujourd’hui détaché du projet; les dernières traces de son travail datant de décembre 2010. Toutefois, avant de disparaître, Nakamoto donna les reines du projet au développeur Gavin Andresen qui créa la Bitcoin Foundation en 2012.

### La reconnaissance dans le monde

Le Bitcoin est aujourd’hui une monnaie acceptée par un nombre considérable d’acteurs économiques. C’est même la monnaie de prédilection pour un certain nombre d’échanges pour lesquels l’anonymat et la discrétion sont de mise. Ainsi, de nombreux organismes et entreprises firent figure [d’_early adopters_][5] et, très tôt, prirent en charge le Bitcoin, notamment: _l’EFF_, _Wikileaks_, _Internet Archive_ et al. Dès 2012, [plus d’un millier][6] de marchand prenaient ainsi en charge le protocole. Des entreprises à portée massive telles que _Baidu_ ou _Zynga_ commencent à accepter le Bitcoin à la même période. _Newegg_, _Dell_, _Microsoft_, _Steam_, _Barclays_, _Uber_ et al. ont successivement accepté le Bitcoin dans les années à venir.

Le premier distributeur automatique de Bitcoin fut également installé à Vancouver, permettant pour la première fois à des clients de vendre ou acheter des Bitcoins dans un café du centre-ville. En septembre 2016, ce sont 771 distributeurs automatiques qui sont présents dans le monde.

Début 2017, le Japon passe une loi donnant au Bitcoin le statut de devise pouvant être utilisée légalement pour n’importe quel échange. Par la suite, en janvier 2018, le gouvernement sud-coréen fait passer une régulation obligeant chaque commerçant et client à révéler leur identité mettant ainsi fin à la possibilité d’échanger des bitcoins de manière anonyme dans le pays.

Toutefois, plusieurs événements mettant en cause la force du Bitcoin ont eu lieu. Ainsi, en août 2017 le Bitcoin est séparé en deux devises différentes: le Bitcoin (_BTC_) et Bitcoin Cash (_BCH_). _Steam_, _Stripe_ et d’autres entreprises ont annoncé en fin d’année 2017 supprimer graduellement la possibilité d’effectuer des transactions en Bitcoin. Les principales raisons évoquées étant les coûts de transaction de plus en plus élevés et un temps de complétion des transactions beaucoup trop lent. Il faut remarquer cependant, que la puissance totale consacrée aujourd’hui au minage des Bitcoins est de [8000000 tera-hash par seconde][7]:

>La puissance globale consacrée aujourd’hui au minage de Bitcoins est de 2 250 000 pétaflops. C’est plus de 20 000 fois la puissance du plus puissant ordinateur du monde (le « Tianhe-2 » détenu par la Chine qui espère atteindre en 2015 une puissance de 100 pétaflops) et c’est largement plus de cent fois la puissance cumulée des 500 ordinateurs les plus puissants. – Jean-Paul Delahaye

---

## Point de vue économique

Le marché du Bitcoin est perçu, selon une majeure partie des économistes, comme une bulle spéculative. En effet, son prix peut doubler [d’un jour à l’autre][8]. D’autres, voient les crypto-monnaies comme le seul moyen de stocker son argent sans crainte d’inflation et création artificielle de monnaie par les banques centrales. Cependant, tout le monde est d’accord sur le fait qu’il s’agit d’un marché relativement [jeune et instable][9], exigeant une observation constante du prix et une approche avec du recul.

### Les débuts du Bitcoin sur le marché

Le Bitcoin est [l’une des premières][10] crypto-monnaies crées. C’est aussi la première crypto-monnaie qui eu un succès au niveau international. Pour bien expliquer le phénomène du Bitcoin, il faut remonter à 2008, quand l’une des plus grandes crises financières s’est produite. Des dizaines de devises ont commencé à perdre de leur valeur – les méthodes traditionnelles d'évaluation monétaire et leur dépendance ont contribuées à une [catastrophe économique][11].

À l'époque, la monnaie virtuelle semblait être une idée abstraite d’Internet. Cela se voyait particulièrement avec les faibles cotations du Bitcoin quand il a fait ses débuts sur le marché boursier de [_MtGox_][12] et ne valait que 0.063 USD par unité. Le Bitcoin était alors la seule monnaie ne pouvant pas être confisquée par les forces d’état (gouvernements, banques, huissiers de justice, etc.). Il fournissait une garantie de possession d’argent qui s'avéra particulièrement utile dans les pays les plus touchés par la crise comme la Grèce.

### Comparaison avec les monnaies classiques

L’argent est une marchandise reconnue comme le résultat d’un consentement général et en tant que moyen d'échange économique. L’argent est donc tout ce qui fait l’objet d’un contrat entre deux personnes et est échangeable contre d’autres biens. C’est par exemple le cas des billets de banque ou encore des virements électroniques. Chaque monnaie doit se soumettre à trois règles:

1. Il doit être possible de montrer qu’**une somme d’argent appartient à son propriétaire**.
2. Il doit être possible de **transférer une somme d’argent** d’un propriétaire à un autre.
3. Après le transfert, le propriétaire d’origine **perd le droit sur la somme transférée**.

Le Bitcoin vérifie toutes ces règles et résout plus efficacement d’autres problèmes grâce à des mécanismes mathématiques et cryptographiques:

- **Anonymat.**
  Toutes les transactions sont publiques – on peut voir en temps réel tous les échanges. L'émetteur et le destinataire sont identifiés par une [clé publique][13] mais leur vraie identité n’est connue de personne à part eux.
- **Divisibilité.**
  Le prix d’un Bitcoin dépasse le budget de la plupart des personnes qui sont potentiellement intéressées dans son achat. L’avantage du Bitcoin est sa divisibilité: il est possible d’acheter 0,01 BTC ou même 0,0000001 BTC ([jusqu'à 8 chiffres après la virgule][14]).
- **Décentralisation.**
  Les crypto-monnaies reposent sur un système informatique décentralisé et souvent avec un code source publié sous une licence libre ([licence MIT][15] pour le Bitcoin). Tout le monde peut utiliser sa propre machine pour aider à améliorer l’infrastructure.

Le Bitcoin est une technologie révolutionnaire qui va changer le monde de la finance, tout comme l’e-mail a changé la façon dont les gens communiquent.

---

## Motivation

Le Bitcoin présente de nombreux avantages que l’on ne retrouve pas chez les modes de paiement classiques. Ces avantages ont motivé beaucoup d’organisations à accepter des paiements en crypto-monnaies et encore plus de personnes à stocker leurs biens dans des portefeuilles virtuels.

### Anonymat

Chaque Bitcoin possédé est une suite de nombres binaires encryptés avec une clé privée par des algorithmes puissants. En tant qu’utilisateur, nous ne sommes donc qu’une chaîne de caractères et de nombres aux yeux des autres internautes. Il n’y a aucun moyen de retrouver notre vraie identité en s’appuyant sur les "hash" du registre public qui sont gérés par le système de blockchain.

Cependant, cette caractéristique du Bitcoin peut aussi être un grand désavantage aux yeux de la police et du gouvernement. En effet, l’anonymat peut être utilisé par les criminels: le plus souvent dans le trafic de drogue et l'évasion fiscale. Dans ces cas, pour retrouver l'identité du criminel, il faut souvent s’appuyer sur l’erreur humaine, en espérant que le criminel ait laissé des traces à des endroits couverts par la police.

En mai 2013 par exemple, les autorités américaines annoncent pour la première fois avoir saisi 11.02 Bitcoins qui auraient été utilisé pour marchander des drogues. Plus tard dans l’année, en octobre, le FBI saisit 26000 Bitcoins – cela représentait approximativement 4 millions d’euros à l’époque et près de 230 millions d’euros aujourd’hui.

### Sécurité

Au cœur des crypto-monnaies se trouve une technologie nommée blockchain. Il s’agit d’un système qui sert à stocker le registre des transactions dans un réseau donné. Dans le cas du Bitcoin, il s’agit du réseau composé de machines des «mineurs», c’est-à-dire des personnes qui veillent sur l'intégrité de chaque transaction par des calculs sophistiqués. Le registre en soi peut être imaginé comme un livre de comptabilité collectif diffus dans l’Internet. Il est ouvert à tous, mais ne peut être corrompu, car il est protégé par des outils cryptographiques puissants. Une fois une transaction enregistrée dans le registre, elle ne peut pas être annulée.

### Facilité de transferts

Les transferts de Bitcoin se font de pair-à-pair. Il est possible d’effectuer des transferts d’argent dans le monde entier à un prix très bas, ou même gratuitement. En effet, nous fixons le prix des transactions nous même. Le coût de transaction est redistribué entre les «mineurs» une fois la transaction accepté (elle doit être acceptée par 6 machines avant d'être effectuée). Plus le coût de transaction est important, plus vite le transfert d’argent sera effectué. En moyenne, un transfert dure 30 minutes ([jusqu'à 16 heures dans les cas extrêmes][16]).

---

## Réseau

Dans cette partie, nous verrons comment est stocké l’argent sur un portefeuille virtuel et comment sont vérifiés les transferts. D’un premier coup d’œil, c’est simple – la blockchain vérifie une par une toutes les transactions et compte combien d’argent a été stocké et dépensé sur l’adresse d’un portefeuille. Si on a reçu assez de Bitcoins sur notre clé publique, le transfert peut être réalisé. Toutefois, en réalité, c’est un mécanisme beaucoup plus complexe.

### Blockchain

La blockchain est une technologie basée sur un réseau de type pair-à-pair (sans serveur central) qui sert d'une interface entre notre base de données locale et les bases de données des autres peers. Chaque machine dans le réseau peut participer à la création de la blockchain. Ce système forme une chaîne de blocs qui sont connectés les uns aux autres. Chaque bloc contient plusieurs informations. Dans le cas des monnaies virtuelles, les plus importantes sont:

1. le nombre total de transactions qui ont été enregistrées dans le bloc;
2. le détail de chaque transaction enregistrée (auteur, destinataire, somme);
3. le “hash” du bloc précédent;

Une fois qu’un bloc est rempli avec un nombre de transactions suffisant, d’autres blocs sont créés et une véritable structure de chaîne apparaît. En 2017, un nouveau bloc est créé toutes les 10 minutes en moyenne.

#### Implementation basique

{% highlight javascript %}
class Block {
  constructor(index, previousHash, data) {
    // Le numéro du bloc
    this.index = index;
    // Transaction
    this.data = data;
    // Date de création
    this.date = new Date();
    // Le hash du bloc précédent
    this.prevHash = previousHash;
  }

  get hash() {
    return sha256(
      this.index + this.date + this.prevHash + JSON.stringify(this.data)
    );
  }
}

class Blockchain {
  constructor(genesisBlock) {
    // Le bloc initial, sans référence au bloc précédent
    this.blockchain = [genesisBlock];
  }

  addBlock(data) {
    const index    = this.blockchain.length;
    const oldBlock = this.blockchain[index - 1];
    const newBlock = new Block(index, oldBlock.hash, data);

    if (this.checkValidity(newBlock, oldBlock)) {
      this.blockchain.push(newBlock);
    }
  }

  checkValidity(newBlock, oldBlock) {
    if (newBlock.index !== oldBlock.index + 1)
      throw new Error(“Invalid index”);

    if (newBlock.previousHash !== oldBlock.hash)
      throw new Error(“Invalid hash”);

    return true;
  }

  checkIntegrality() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const prev = this.blockchain[i - 1];
      const next = this.blockchain[i];

      if (!this.checkValidity(next, prev)) return false;
    }

    return true;
  }
}
{% endhighlight %}

### Transactions

Dans la blockchain, toute information est publique. C’est l’une des caractéristiques révolutionnaires de la blockchain qui fait tout son intérêt – chaque transaction (partie élémentaire d’un bloc) peut être vérifiée par n’importe qui, sans banque centrale. L'implémentation la plus simple pourrait être:

```
Jean envoie 5 BTC a Pierre
…
Marie envoie 2 BTC a Lucie
```

Pour vérifier que c’est bien Jean et Marie qui ont envoyé de l’argent, dans chaque transaction on ajoute une signature ([digital signature][17]) générée par notre portefeuille. Il s’agit d’un système cryptographique classique appelé [RSA][18]. À notre compte est attribué une clé privée (_q_) et une clé publique (_p_). De plus, nous disposons du hash (_h_) de la transaction. Ce sont de grand nombres premiers, issus d’une courbe elliptique.

#### Vérification de la signature

Nous disposons de 3 nombres:
- q: clé privée, connue par le propriétaire du portefeuille;
- p: clé publique, utilisée pour effectuer des transactions;
- h: hash de la transaction;

Pour calculer une signature, il est nécessaire d’utiliser les 3 nombres, sans masquer la clé privée. Pour cela, on effectue l'opération suivante:

<p style="text-align: center">N = p × q</p>

Ainsi on obtient un 4<sup>eme</sup> nombre contenant la clé privée cachée. Avec les moyens technologiques dont nous disposons aujourd’hui, il est impossible d’extraire cette clé sans la connaître à l’avance. Il est cependant très facile de vérifier, si (_N_) cache bien notre clé privée en effectuant l'opération inverse:

<p style="text-align: center">q = N / p</p>

Pour calculer la signature (_s_), nous effectuons une dernière opération:

<p style="text-align: center">s = h × N</p>

Pour vérifier les transactions on utilise les propriétés du système RSA. Il est ainsi possible de vérifier que l’auteur de la transaction est en possession de la clé privée qui correspond à la clé publique et donc que c’est lui qui a effectué la transaction. Le champ data d’un bloc peut ressembler à celui-ci:

{% highlight json %}
{
  receiver: '1HPs4CYgxpR3MP4…kfBciJBfKLUT', // clé publique
  sender: '14uGXpDoZxFsjzT…R4mLi8ay4aAy',   // clé publique
  amount: '0.0015',
  N: '12S…036',
  h: '11bf52e5ef03cb40d7473…5266df0360fcd613fdc6b85',
  s: '809…fc4'
}
{% endhighlight %}

---

## Resources

1. [“Bitcoin - a Step Toward Censorship-Resistant Digital Currency” – Rainey Reitman][5]
2. [”BitPay Signs 1,000 Merchants to Accept Bitcoin Payments” – Brian Browdie][6]
3. [“Le Bitcoin, première crypto-monnaie” – Jean-Paul Delahaye][7]
4. [“The price of bitcoin has doubled in two weeks“ – Lucas Matney][8]
5. [“Why Is Bitcoin's Value So Volatile” –  Jonathan Todd Barker][9]
6. [“Terrorist Use of Cyberspace and Cyber Terrorism: New Challenges and Responses” – M.N. Ogun][12]
7. [“Bitcoin public and private keys” – Prypto][13]
8. [“How long do Bitcoin transactions take?“ – Steven Buchko][16]

[1]: https://coinmarketcap.com
[2]: https://whois.com/whois/bitcoin.org
[3]: http://satoshi.nakamotoinstitute.org/emails/cryptography
[4]: http://nakamotoinstitute.org/literature
[5]: https://eff.org/deeplinks/2011/01/bitcoin-step-toward-censorship-resista "“Bitcoin - a Step Toward Censorship-Resistant Digital Currency” – Rainey Reitman"
[6]: https://americanbanker.com/news/bitpay-signs-1-000-merchants-to-accept-bitcoin-payments "”BitPay Signs 1,000 Merchants to Accept Bitcoin Payments” – Brian Browdie"
[7]: http://www.societe-informatique-de-france.fr/wp-content/uploads/2014/10/1024-4-delahaye.pdf "“Le Bitcoin, première crypto-monnaie” – Jean-Paul Delahaye"
[8]: https://techcrunch.com/2017/12/07/the-price-of-bitcoin-has-doubled-in-two-weeks-now-above-16k/ "“The price of bitcoin has doubled in two weeks“ – Lucas Matney"
[9]: https://www.investopedia.com/articles/investing/052014/why-bitcoins-value-so-volatile.asp "“Why Is Bitcoin's Value So Volatile” –  Jonathan Todd Barker"
[10]: http://www.societe-informatique-de-france.fr/wp-content/uploads/2014/10/1024-4-delahaye.pdf "“Le Bitcoin, première crypto-monnaie” – Jean-Paul Delahaye"
[11]: https://fr.wikipedia.org/wiki/Crise_bancaire_et_financi%C3%A8re_de_l%27automne_2008 "Crise bancaire et financière de l'automne 2008"
[12]: https://books.google.fr/books?id=oPboDAAAQBAJ&lpg=PA47&vq=3.%20the%20fall%20of%20mt.%20gox&dq=mt.%20gox%2070&pg=PA47&q=3.%20the%20fall%20of%20mt.%20gox "“Terrorist Use of Cyberspace and Cyber Terrorism: New Challenges and Responses” – M.N. Ogun"
[13]: http://www.dummies.com/software/other-software/bitcoin-public-private-keys/ "“Bitcoin public and private keys” – Prypto"
[14]: https://en.bitcoin.it/wiki/Satoshi_(unit) "Satoshi (unit)"
[15]: https://github.com/bitcoin/bitcoin/blob/master/COPYING "Bitcoin License"
[16]: https://coincentral.com/how-long-do-bitcoin-transfers-take/ "“How long do Bitcoin transactions take?“ – Steven Buchko"
[17]: https://fr.wikipedia.org/wiki/Signature_num%C3%A9rique "Signature numérique"
[18]: https://fr.wikipedia.org/wiki/Chiffrement_RSA "Chiffrement RSA"

*[hash]: Valeur de sortie d’une fonction de hachage cryptographique, c’est-à-dire une fonction qui à une donnée de taille arbitraire, associe une image de taille fixe, et dont une propriété essentielle est qu'elle est pratiquement impossible à inverser.
*[RSA]: Le chiffrement RSA (nommé par les initiales de ses trois inventeurs) est un algorithme de cryptographie asymétrique, très utilisé dans le commerce électronique, et plus généralement pour échanger des données confidentielles sur Internet.
