import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Icon \u56FE\u6807\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u57FA\u4E8E IconFont \u5B57\u4F53\u7684\u56FE\u6807\u96C6\uFF0C\u53EF\u4EE5\u901A\u8FC7 Icon \u7EC4\u4EF6\u4F7F\u7528\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><p><code>Icon</code> \u7684 <code>name</code> \u5C5E\u6027\u652F\u6301\u4F20\u5165\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\u3002</p><pre><code class="language-tsx">&lt;Icon name=<span class="hljs-string">&quot;dongdong&quot;</span>&gt;&lt;/Icon&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;JD&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Icon</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;40&quot;</span>  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Icon</span>&gt;</span></span>
</code></pre><h3>\u56FE\u6807\u989C\u8272</h3><p><code>Icon</code> \u7684 <code>color</code> \u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u56FE\u6807\u7684\u989C\u8272\u3002</p><pre><code class="language-tsx">&lt;Icon name=<span class="hljs-string">&quot;dongdong&quot;</span> color=<span class="hljs-string">&quot;#fa2c19&quot;</span>&gt;&lt;/Icon&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;dongdong&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#64b578&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Icon</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;JD&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#fa2c19&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Icon</span>&gt;</span></span>
</code></pre><h3>\u56FE\u6807\u5927\u5C0F</h3><p><code>Icon</code> \u7684 <code>size</code> \u5C5E\u6027\u7528\u6765\u8BBE\u7F6E\u56FE\u6807\u7684\u5C3A\u5BF8\u5927\u5C0F\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A <code>px</code>\u3002</p><pre><code class="language-tsx">&lt;Icon name=<span class="hljs-string">&quot;dongdong&quot;</span>&gt;&lt;/Icon&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;dongdong&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;24&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Icon</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;dongdong&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;16&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Icon</span>&gt;</span></span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u56FE\u6807</h3><p>\u5982\u679C\u9700\u8981\u5728\u73B0\u6709 Icon \u7684\u57FA\u7840\u4E0A\u4F7F\u7528\u66F4\u591A\u56FE\u6807\uFF0C\u53EF\u4EE5\u5F15\u5165\u7B2C\u4E09\u65B9 iconfont \u5BF9\u5E94\u7684\u5B57\u4F53\u6587\u4EF6\u548C CSS \u6587\u4EF6\uFF0C\u4E4B\u540E\u5C31\u53EF\u4EE5\u5728 Icon \u7EC4\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528\u3002</p><pre><code class="language-css"><span class="hljs-comment">/* \u5F15\u5165\u7B2C\u4E09\u65B9\u6216\u81EA\u5B9A\u4E49\u7684\u5B57\u4F53\u56FE\u6807\u6837\u5F0F */</span>
<span class="hljs-keyword">@font-face</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
  <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&#39;./my-icon.ttf&#39;</span>) <span class="hljs-built_in">format</span>(<span class="hljs-string">&#39;truetype&#39;</span>);
}

<span class="hljs-selector-class">.my-icon</span> {
  <span class="hljs-attribute">font-family</span>: <span class="hljs-string">&#39;my-icon&#39;</span>;
}

<span class="hljs-selector-class">.my-icon-extra</span><span class="hljs-selector-pseudo">::before</span> {
  <span class="hljs-attribute">content</span>: <span class="hljs-string">&#39;\\e626&#39;</span>;
}
</code></pre><pre><code class="language-tsx">&lt;!-- \u901A\u8FC7 <span class="hljs-class"><span class="hljs-keyword">class</span>-<span class="hljs-title">prefix</span> \u6307\u5B9A\u7C7B\u540D\u4E3A <span class="hljs-title">my</span>-<span class="hljs-title">icon</span> --&gt;
&lt;<span class="hljs-title">Icon</span> <span class="hljs-title">class</span>-<span class="hljs-title">prefix</span></span>=<span class="hljs-string">&quot;my-icon&quot;</span> name=<span class="hljs-string">&quot;extra&quot;</span> /&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5</td><td>String</td><td>-</td></tr><tr><td>color</td><td>\u56FE\u6807\u989C\u8272</td><td>String</td><td>-</td></tr><tr><td>size</td><td>\u56FE\u6807\u5927\u5C0F\uFF0C\u5982 <code>20px</code> <code>2em</code> <code>2rem</code></td><td>String or Number</td><td>-</td></tr><tr><td>class-prefix</td><td>\u7C7B\u540D\u524D\u7F00\uFF0C\u7528\u4E8E\u4F7F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807</td><td>String</td><td><code>nutui-iconfont</code></td></tr><tr><td>tag</td><td>tsx \u6807\u7B7E</td><td>String</td><td><code>i</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u56FE\u6807\u65F6\u89E6\u53D1</td><td>event: Event</td></tr></tbody></table>`,24),c=[p],g={setup(o,{expose:s}){return s({frontmatter:{}}),(h,d)=>(n(),a("div",l,c))}};export{g as default};