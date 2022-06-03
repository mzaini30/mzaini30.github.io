import{k as s,o as e,c as t,l as p}from"./index.3debeabe.js";import{b as a}from"./route-block.b5bad31b.js";const o={class:"markdown-body"},c=p(`<h1>Cara Menggunakan Uno CSS</h1><p>Kenapa Uno CSS? Karena dia cepat. Bisa dilihat dari hasil benchmark berikut:</p><pre><code>3/26/2022, 11:41:26 PM
1656 utilities | x50 runs (min build time)

none                             12.42 ms / delta.      0.00 ms
unocss       v0.30.6             20.98 ms / delta.      8.57 ms (x1.00)
tailwindcss  v3.0.23           1621.38 ms / delta.   1608.96 ms (x187.79)
windicss     v3.5.1            1855.86 ms / delta.   1843.45 ms (x215.16)
</code></pre><p>Jadi, dia itu 200 kali lebih cepat daripada Tailwind dan Windi.</p><p>Yuk kita coba.</p><p>Pertama, kita install dulu create-vite:</p><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> i -g create-vite
</code></pre><p>Kalau sudah, kita buat project dengan mengetikkan perintah:</p><pre class="language-bash"><code class="language-bash">create-vite
</code></pre><p>Kemudian ada pertanyaan <code>project name</code>. Di sini, aku isi dengan <code>latihan-uno</code>.</p><p>Lalu, ada pertanyaan <code>select a framework</code>. Di sini, aku pilih <code>vue</code>.</p><p>Kemudian, <code>select a variant</code>, aku pilih <code>vue</code>.</p><p>Kemudian, jalankan:</p><pre class="language-bash"><code class="language-bash"><span class="token builtin class-name">cd</span> latihan-uno
<span class="token function">npm</span> i
</code></pre><p>Terus, buka folder tersebut di Sublime atau VS Code.</p><p>Lalu, kita install Uno CSS dengan perintah:</p><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> i unocss @unocss/reset @unocss/transformer-directives
</code></pre><p>Pada <code>vite.config.js</code> diisi seperti ini:</p><pre class="language-diff"><code class="language-diff">import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import unocss from &#39;unocss/vite&#39;
</span><span class="token prefix inserted">+</span><span class="token line"> import transformerDirective from &#39;@unocss/transformer-directives&#39;
</span></span>
// https://vitejs.dev/config/
export default defineConfig({
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> plugins: [
</span><span class="token prefix unchanged"> </span><span class="token line">   vue(),
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    unocss({
</span><span class="token prefix inserted">+</span><span class="token line">      transformers: [
</span><span class="token prefix inserted">+</span><span class="token line">        transformerDirective()
</span><span class="token prefix inserted">+</span><span class="token line">      ]
</span><span class="token prefix inserted">+</span><span class="token line">    })
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> ]
</span></span>})
</code></pre><p>Lalu, pada <code>src/main.js</code>:</p><pre class="language-diff"><code class="language-diff">import { createApp } from &#39;vue&#39;
import App from &#39;./App.vue&#39;
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import &#39;@unocss/reset/tailwind.css&#39;
</span><span class="token prefix inserted">+</span><span class="token line"> import &#39;uno.css&#39;
</span></span>
createApp(App).mount(&#39;#app&#39;)
</code></pre><p>Lalu kita jalankan mode dev:</p><pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> run dev
</code></pre><p>Sekarang kita coba fiturnya Uno CSS. Sintaksnya sih sama seperti Tailwind. Contohnya aja pada <code>src/App.vue</code> kita buat seperti ini:</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-3xl mb-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Ini Judul<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Ini adalah isinya<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    @apply text-green-500
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,25),l=[c],f={meta:[]},i={name:"uno",setup(u,{expose:n}){return s({meta:[]}),n({frontmatter:{meta:[]}}),(d,k)=>(e(),t("div",o,l))}};typeof a=="function"&&a(i);export{i as default,f as frontmatter};
