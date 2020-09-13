# インストール方法

[[toc]]

## Jetstream のインストール

[Laravel Installer](https://laravel.com/docs/installation#installing-laravel) をインストール済みならば、`--jet` オプションで Jetstream を搭載した新しい Laravel アプリケーションを作成できます:

```bash
laravel new project-name --jet
```

Laravel Installer 経由で Jetstream をインストールした後、データベースのマイグレートを行う必要があります:

```bash
php artisan migrate
```

### Composer を使ったインストール

あるいは、次のように Composer を使って 新しい Laravel プロジェクトに Jetstream をインストールできます:

```bash
composer require laravel/jetstream
```

Composer を使って Jetstream をインストールする場合、`jetstream:install` Artisan コマンドを実行する必要があります。このコマンドは好みのスタック名を受け入れます。(livewire または inertia) Jetstream プロジェクトを始める前に、[Livewire](https://laravel-livewire.com) または [Inertia](https://inertiajs.com) のドキュメントに目を通すことを強くおすすめします。さらに、`--teams` スイッチを使うとチームのサポートを有効化できます:

```bash
php artisan jetstream:install livewire

php artisan jetstream:install inertia --teams

npm install && npm run dev

php artisan migrate
```

## Jetstream の構造

### ビュー / ページ

インストール時、Jetstream はアプリケーションにさまざまなビューやクラスを出力します。Livewire 使用時、ビューは `resources/views` ディレクトリに出力されます。Inertia 使用時、ページは `resources/js/Pages` ディレクトリに出力されます。これらビュー/ページは Jetstream がサポートする機能すべてが含まれており、必要に応じて自由にカスタマイズできます。Jetstream をアプリケーションの出発点と考えてください。Jetstream をインストールしたら、あなたの好きなものを自由にカスタマイズしてください。

#### ダッシュボード

アプリケーションの "メイン" ビューは、Livewire 使用の場合は `resources/views/dashboard.blade.php` に、Inertia 使用の場合は `resources/js/Pages/Dashboard.vue` に出力されます。アプリケーションの初期表示を構築する出発点として、これを自由に使用できます。

### アクション

さらに、"action" クラスは `app/Actions` ディレクトリに出力されます。これらのアクションクラスは通常、単一のアクションを実行します。チームの作成やユーザーの削除など単一の Jetstream 機能に対応しています。Jetstream のバックエンドの挙動を調整したい場合は、これらのクラスを自由にカスタマイズしてください。

### Tailwind

インストール時、Jetstream は Tailwind CSS フレームワークと統合してスキャフォールドします。具体的には、`webpack.mix.js` ファイルと `tailwind.config.js` ファイルを作成します。これら2つのファイルは CSS のビルドに使用されます。必要に応じてこれらのファイルを自由に変更できます。

さらに、`tailwind.config.js` ファイルは、選択した Jetstream スタックに応じて、関連ディレクトリを適切に指定して PurgeCSS サポートを事前に設定されています。

`package.json` ファイルには、アセットコンパイルに使える NPM コマンドがすでに用意されています:

```bash
npm run dev

npm run prod

npm run watch
```

### Livewire Components

Jetstream uses a variety of Blade components, such as buttons and modals, to power the Livewire stack. If you are using the Livewire stack and you would like to publish these components after installing Jetstream, you may use the `vendor:publish` Artisan command:

```bash
php artisan vendor:publish --tag=jetstream-views
```

## Application Logo

As you may have noticed, the Jetstream logo is utilized on Jetstream's authentication pages as well as the top navigation bar. You may easily customize the logo by modifying two Jetstream components.

### Livewire

If you are using the Livewire stack, you should first publish the Livewire stack's Blade components:

```bash
php artisan vendor:publish --tag=jetstream-views
```

Next, you should customize the SVGs located in the `resources/views/vendor/jetstream/components/application-logo.blade.php` and `resources/views/vendor/jetstream/components/application-mark.blade.php` components.

### Inertia

If you are using the Inertia stack, you should customize the SVGs located in `resources/js/Jetstream/ApplicationLogo.vue` and `resources/js/Jetstream/ApplicationMark.vue`. After customizing these components, you should rebuild your assets:

```bash
npm run dev
```
