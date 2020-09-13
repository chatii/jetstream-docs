# はじめに

[[toc]]

## Laravel Jetstream

Laravel Jetstream は Laravel のための美しいデザインを持つアプリケーションのスキャフォールドです。Jetstream はあなたの次の Laravel アプリケーションのための完全な出発点を提供し、ログイン・登録・Eメール検証・2要素認証(2FA)・セッション管理・[Laravel Sanctum](https://github.com/laravel/sanctum) による API サポートと、オプションでチーム管理機能を含みます。

Jetstream は Tailwind CSS を使ってデザインされており、[Livewire](./stacks/livewire.md) または [Inertia](./stacks/inertia.md) を選択してスキャフォールドします。

![Screenshot of Laravel Jetstream](./../assets/img/preview.png)

## 利用できるスタック

Laravel Jetstream は2つのフロントエンドスタックを選択できます: [Livewire](https://laravel-livewire.com) または [Inertia.js](https://inertiajs.com) いずれのスタックも、アプリケーション構築のための生産的で強力な出発点を提供しますが、スタックの選択はあなたの好みのテンプレート言語によります。

### Livewire + Blade

Laravel Livewire は Laravel Blade をテンプレート言語として用いた、モダン・リアクティブ・動的インターフェースをシンプルに構築できるライブラリです。動的でリアクティブなアプリケーションを構築したいけれど、Vue.js のような Javascript フレームワークに飛び込むのは気が引ける場合に最適です。

Livewire を使う時、アプリケーションのどこを Livewire コンポーネントにするかを抽出・選択できますが、それ以外の残りの部分は、今まで通りの Blade テンプレートとしてレンダリングできます。

:::tip Livewire Screencasts

もし、初めて Livewire を使うなら、[screencasts available on the Livewire website](https://laravel-livewire.com/screencasts/installation) を参照してください。
:::

### Inertia.js + Vue

Jetstream が提供する Inertia.js スタックは Vue.js をテンプレート言語として用います。Inertia アプリケーションの構築は、典型的な Vue アプリケーションの構築に似ていますが、Vue ルーターの代わりに Laravel のルーターを使うことになります。Inertia は小さなライブラリで、コンポーネントの名前と、そのコンポーネントの "props" にハイドレートされるデータを提供することで、Laravel バックエンドから Vueのシングルファイルコンポーネントをレンダリングできます。

言い換えれば、このスタックはクライアントサイドの複雑なルーティングを伴わずに Vue.js のフルパワーを提供します。使い慣れた標準の Laravel ルーターを使います。

Inertia スタックは、Vue.js をテンプレート言語として使うことに慣れていて楽しければ、最適な選択です。


