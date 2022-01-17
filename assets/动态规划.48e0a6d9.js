import{d as s,z as e}from"./vendor.d045623f.js";const n=s({name:"Markdown"}),a=()=>e("div",{class:["md2vue-wrapper"],innerHTML:`<h1 id="\u52A8\u6001\u89C4\u5212">\u52A8\u6001\u89C4\u5212</h1><p>\u7531\u4E8E\u5148\u524D\u4E09\u6B21\u5173\u4E8E\u6570\u636E\u7ED3\u6784\uFF08\u94FE\u8868\u3001\u6808\u548C\u961F\u5217\u3001\u6811\uFF09\u7684\u5206\u4EAB\uFF0C\u5728\u8FD9\u4E9B\u5FC5\u5907\u57FA\u7840\u4E0A\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7531\u6B64\u8FDB\u5165\u8E0F\u8DB3\u7B97\u6CD5\u7684\u6DF1\u6C34\u533A\uFF0C\u6211\u4EEC\u5148\u6765\u770B\u4ECA\u5929\u7684\u4E3B\u4EBA\u516C - \u52A8\u6001\u89C4\u5212\uFF08Dynamic Programming\uFF09</p>
<p>\u52A8\u6001\u89C4\u5212\u662F\u4E00\u79CD\u601D\u60F3\uFF0C\u6240\u8C13\u601D\u60F3\uFF0C\u5C31\u662F\u597D\u7528\u5230\u7206\u7684\u5957\u8DEF\u3002</p>
<h2 id="\u4EC0\u4E48\u662F\u52A8\u6001\u89C4\u5212\u5462\uFF1F">\u4EC0\u4E48\u662F\u52A8\u6001\u89C4\u5212\u5462\uFF1F</h2><p>\u662F\u4E00\u79CD\u628A\u539F\u95EE\u9898\u5206\u89E3\u4E3A\u76F8\u5BF9\u7B80\u5355\u7684\u5B50\u95EE\u9898\u7684\u7B97\u6CD5\uFF0C\u6765\u6C42\u89E3\u590D\u6742\u7684\u7B97\u6CD5</p>
<h2 id="\u52A8\u6001\u89C4\u5212\u95EE\u9898\u7684\u7279\u5F81">\u52A8\u6001\u89C4\u5212\u95EE\u9898\u7684\u7279\u5F81</h2><ol>
<li><p>\u4E00\u822C\u7684\u8868\u73B0\u5F62\u5F0F\u662F\u6C42\u6700\u503C, \u6BD4\u5982\u6C42\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217\uFF0C\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u7B49\u7B49</p>
</li>
<li><p>\u65E2\u7136\u662F\u6C42\u6700\u503C\uFF0C\u6838\u5FC3\u95EE\u9898\u53C8\u662F\u4EC0\u4E48\uFF1F\u6C42\u89E3\u52A8\u6001\u89C4\u5212\u7684\u6838\u5FC3\u95EE\u9898\u662F\u7A77\u4E3E</p>
</li>
<li><p>\u4E09\u8981\u7D20\uFF1A</p>
</li>
</ol>
<p>a. \u5B58\u5728\xA0\u91CD\u53E0\u5B50\u95EE\u9898</p>
<p>\u5982\u679C\u66B4\u529B\u7A77\u4E3E\uFF0C\u6548\u7387\u4E00\u5B9A\u4F1A\u5F88\u4F4E\u4E0B\uFF0C\u6211\u4EEC\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u907F\u514D\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u8BA1\u7B97\uFF0C\u91C7\u53D6 \u5907\u5FD8\u5F55 \u4EE5\u53CA DP table \u6765\u4F18\u5316\u7A77\u4E3E\u8FC7\u7A0B\u3002</p>
<p>b. \u5177\u5907\xA0\u6700\u4F18\u5B50\u7ED3\u6784</p>
<p>c. \u5217\u51FA\xA0\u6B63\u786E\u7684 \u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B</p>
<ol start="4">
<li><p>do\u7684\u6839\u672C\u76EE\u7684\u662F\u4E3A\u4E86\u89E3\u51B3\u5197\u4F59\uFF0C\u7528\u7A7A\u95F4\u6362\u65F6\u95F4</p>
</li>
<li><p>\u52A8\u6001\u89C4\u5212\u6700\u96BE\u7684\u5730\u65B9\u5C31\u662F\xA0\u5199\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B</p>
</li>
</ol>
<h2 id="\u91CD\u53E0\u5B50\u95EE\u9898">\u91CD\u53E0\u5B50\u95EE\u9898</h2><p>\u6BD4\u5982\u8BF4\u54B1\u4EEC\u5E38\u89C1\u7684\u9012\u5F52\u7B97\u6CD5\uFF0C\u662F\u5178\u578B\u7684\u81EA\u9876\u5411\u4E0B\u5BF9\u95EE\u9898\u8FDB\u884C\u6C42\u89E3\uFF0C\u7136\u540E\u6BCF\u6B21\u4EA7\u751F\u7684\u5B50\u95EE\u9898\u5E76\u4E0D\u603B\u662F\u65B0\u7684\u95EE\u9898\uFF0C\u53EF\u80FD\u67D0\u4E9B\u5B50\u95EE\u9898\u4F1A\u88AB\u91CD\u590D\u8BA1\u7B97\u597D\u591A\u6B21</p>
<p>dp\u7B97\u6CD5\u5C31\u662F\u5229\u7528\u4E86\u8FD9\u79CD\u5B50\u95EE\u9898\u7684\u91CD\u53E0\u6027\u8D28\uFF0C\u5BF9\u6BCF\u4E2A\u5B50\u95EE\u9898\u5462\uFF0C\u53EA\u4F1A\u8FDB\u884C\u4E00\u6B21\u8BA1\u7B97\uFF0C\u7136\u540E\u5C06\u5176\u8BA1\u7B97\u7684\u7ED3\u679C\u4FDD\u5B58\u5728\u4E00\u4E2A\u8868\u683C\uFF08dp\u6570\u7EC4\uFF09\u4E2D\uFF08\u907F\u514D\u4E86\u591A\u4F59\u7684\u91CD\u590D\u5B50\u95EE\u9898\u6C42\u89E3\uFF09\uFF0C\u5F53\u518D\u6B21\u9047\u5230\u5B50\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u53BB\u8868\u683C\u4E2D\u76F4\u63A5\u62FF\u7ED3\u679C\uFF0C\u964D\u4F4E\u4E86\u65F6\u95F4\u590D\u6742\u5EA6\u3002\u8BF4\u767D\u4E86\uFF0C\u8FD8\u662F\u90A3\u53E5\u7528\u7A7A\u95F4\u6362\u65F6\u95F4\u3002</p>
<h2 id="\u6700\u4F18\u5B50\u7ED3\u6784">\u6700\u4F18\u5B50\u7ED3\u6784</h2><p>\u5982\u679C\u95EE\u9898\u7ED3\u679C\u7684\u6700\u4F18\u89E3\uFF0C\u6240\u5305\u542B\u7684\u5B50\u95EE\u9898\u7684\u89E3\u4E5F\u662F\u6700\u4F18\u7684\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u5B50\u95EE\u9898\u76F8\u4E92\u72EC\u7ACB\uFF0C\u90A3\u4E48\u5C31\u8BA4\u4E3A\u8FD9\u4E2A\u95EE\u9898\u5177\u5907\u6700\u4F18\u5B50\u7ED3\u6784\u3002</p>
<h2 id="\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B">\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B</h2><p>\u60F3\u8981\u5199\u51FA\u6B63\u786E\u7684\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\uFF0C\u4E00\u5B9A\u8981\u53BB\u601D\u8003\u7684\u51E0\u70B9\uFF1A</p>
<ol>
<li><p>\u8FD9\u4E2A\u95EE\u9898\u7684\xA0base case\uFF08\u6700\u7B80\u5355\u7684\u60C5\u51B5\uFF09\u662F\u4EC0\u4E48\uFF1F</p>
</li>
<li><p>\u8FD9\u4E2A\u95EE\u9898\u6709\u4EC0\u4E48\xA0\u72B6\u6001</p>
</li>
<li><p>\u5BF9\u4E8E\u6BCF\u4E2A\u72B6\u6001\uFF0C\u53EF\u4EE5\u505A\u51FA\u4EC0\u4E48\xA0\u9009\u62E9\xA0\u4F7F\u5F97\xA0\u72B6\u6001\xA0\u53D1\u751F\u53D8\u5316</p>
</li>
<li><p>\u5982\u4F55\u53BB\xA0\u5B9A\u4E49dp\u6570\u7EC4\xA0\u7684\u542B\u4E49\u53BB\u8868\u73B0 \u72B6\u6001 \u548C \u9009\u62E9</p>
</li>
</ol>
<h2 id="\u52A8\u6001\u89C4\u5212\u7684\u89E3\u9898\u601D\u60F3">\u52A8\u6001\u89C4\u5212\u7684\u89E3\u9898\u601D\u60F3</h2><ol>
<li><p>\u660E\u786E base case</p>
</li>
<li><p>\u660E\u786E \u72B6\u6001 -&gt; \u53EF\u4EE5\u7406\u89E3\u4E3A\u73B0\u5728\u5DF2\u77E5\u7684\u53D8\u91CF</p>
</li>
<li><p>\u660E\u786E \u9009\u62E9 -&gt; \u524D\u4E00\u9636\u6BB5\u5982\u4F55\u8F6C\u6362\u4E3A\u540E\u4E00\u9636\u6BB5</p>
</li>
<li><p>\u5B9A\u4E49dp \u6570\u7EC4\u7684\u542B\u4E49</p>
</li>
</ol>
<h2 id="\u91CD\u53E0\u5B50\u95EE\u9898\u4E3E\u4F8B - \u6590\u6CE2\u90A3\u5951\u6570\u5217">\u91CD\u53E0\u5B50\u95EE\u9898\u4E3E\u4F8B - \u6590\u6CE2\u90A3\u5951\u6570\u5217</h2><p>1 1 2 3 5 8 13 21 34 \u2026\u2026</p>
<ol>
<li>\u66B4\u529B\u9012\u5F52</li>
</ol>
<img src="./\u6590\u6CE2\u90A3\u5951\u6570\u5217-\u66B4\u529B\u9012\u5F52.png" style="width: 100%; max-width=500px"/>


        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">function</span> <span class="hljs-title">fib</span>(n) {
  if (n === 0) <span class="hljs-keyword">return</span> <span class="hljs-type">0</span>
  <span class="hljs-keyword">if</span> (n === <span class="hljs-number">1</span> || n === <span class="hljs-number">2</span>) <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>

  <span class="hljs-keyword">return</span> fib(n - <span class="hljs-number">1</span>) + fib(n - <span class="hljs-number">2</span>)
}</code></pre>

    </div><p>\u9012\u5F52\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u600E\u4E48\u8BA1\u7B97\u5462\uFF1F\xA0\u5C31\u662F\u6BCF\u4E2A\u5B50\u95EE\u9898\u4E2A\u6570\u4E58\u4EE5\u89E3\u51B3\u4E00\u4E2A\u5B50\u95EE\u9898\u6240\u9700\u8981\u7684\u65F6\u95F4</p>
<p>\u9996\u5148\u8BA1\u7B97\u5B50\u95EE\u9898\u4E2A\u6570\uFF0C\u5373\u9012\u5F52\u6811\u4E2D\u8282\u70B9\u7684\u603B\u6570\uFF0C\u663E\u7136\u4E8C\u53C9\u6811\u8282\u70B9\u603B\u6570\uFF0C\u663E\u7136\u8282\u70B9\u603B\u6570\u4E3A\u6307\u6570\u7EA7\u522B\u7684\uFF0C\u6240\u4EE5\u6C42\u5B50\u95EE\u9898\u4E2A\u6570\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O\uFF082^n\uFF09.</p>
<p>\u7136\u540E\u8BA1\u7B97\u89E3\u51B3\u4E00\u4E2A\u5B50\u95EE\u9898\u65F6\u95F4\u4E3A\uFF1A f(n-1) + f(n-2)\u52A0\u6CD5\u64CD\u4F5C\uFF0C\u672C\u7B97\u6CD5\u6CA1\u6709\u5FAA\u73AF\uFF0C\u6545\u4E3A O(1)</p>
<p>\u5F97\u51FA\u7ED3\u8BBA\uFF1A\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A\uFF1A O(2^n),\xA0\u6307\u6570\u7EA7\u522B</p>
<p>\u7B97\u6CD5\u4F4E\u6548\u7684\u539F\u56E0\uFF1A\u5B58\u5728\u5927\u91CF\u7684\u91CD\u590D\u8BA1\u7B97\u3002</p>
<p>\u8FD9\u5C31\u662F\u52A8\u6001\u89C4\u5212\u95EE\u9898\u7684\u7B2C\u4E00\u4E2A\u6027\u8D28\uFF1A\u91CD\u53E0\u5B50\u95EE\u9898</p>
<ol start="2">
<li>\u5907\u5FD8\u5F55</li>
</ol>
<img src="./\u6590\u6CE2\u90A3\u5951\u6570\u5217-\u5907\u5FD8\u5F55.png" style="width: 100%; max-width=500px"/>


        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">function</span> <span class="hljs-title">fib</span>(n) {
  if (n === 0) <span class="hljs-keyword">return</span> <span class="hljs-type">0</span>;

  const memoArr = []

  <span class="hljs-keyword">return</span> helper(memoArr, n)

}

<span class="hljs-keyword">function</span> <span class="hljs-title">helper</span>(memoArr, n) {
  if (n === 1 || n === 2) <span class="hljs-keyword">return</span> <span class="hljs-type">1</span>
  <span class="hljs-keyword">if</span> (!memoArr[n]) {
    memoArr[n] = helper(memoArr, n - <span class="hljs-number">1</span>) + helper(memoArr, n - <span class="hljs-number">2</span>)
  }
  <span class="hljs-keyword">return</span> memoArr[n]
}</code></pre>

    </div><p>\u9012\u5F52\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u600E\u4E48\u8BA1\u7B97\u5462\uFF1F\xA0\u5C31\u662F\u6BCF\u4E2A\u5B50\u95EE\u9898\u4E2A\u6570\u4E58\u4EE5\u89E3\u51B3\u4E00\u4E2A\u5B50\u95EE\u9898\u6240\u9700\u8981\u7684\u65F6\u95F4</p>
<p>\u5B50\u95EE\u9898\u4E2A\u6570\uFF1A\u5C31\u662F\u56FE\u4E2D\u7684\u5B50\u8282\u70B9\u4E2A\u6570\uFF0Cf(1), f(2) \u2026\u2026 f(20), \u4E0E n \u6210\u6B63\u6BD4\uFF0C\u4E3A O(N)</p>
<p>\u89E3\u51B3\u4E00\u4E2A\u5B50\u95EE\u9898\u6240\u9700\u65F6\u95F4\uFF1A\u540C\u4E0A\u4E5F\u4E3A O(1)</p>
<p>\u5F97\u51FA\u7ED3\u8BBA\u4E3A\uFF1AO(N)\uFF0C\u6BD4\u8D77\u66B4\u529B\u9012\u5F52\uFF0C\u7B97\u964D\u7EF4\u6253\u51FB</p>
<p>\u5176\u5B9E\uFF0C\u8FD9\u79CD\u89E3\u6CD5\u548C\u8FED\u4EE3\u7684\u52A8\u6001\u89C4\u5212\u5DF2\u7ECF\u5DEE\u4E0D\u591A\u4E86\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u79CD\u89E3\u6CD5\u662F\u201C\u81EA\u9876\u5411\u4E0B\u201D\u7684\uFF0C\u52A8\u6001\u89C4\u5212\u662F\u201C\u81EA\u5E95\u5411\u4E0A\u201D</p>
<ol start="3">
<li>dp\u6570\u7EC4</li>
</ol>
<img src="./\u6590\u6CE2\u90A3\u5951\u6570\u5217-\u52A8\u6001\u89C4\u5212.png" style="width: 100%; max-width=500px"/>


        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-keyword">function</span> <span class="hljs-title">fib</span>(n) {
  if (n === 0) <span class="hljs-keyword">return</span> <span class="hljs-type">0</span>
  let dp = <span class="hljs-keyword">new</span> <span class="hljs-keyword">Array</span>(n+<span class="hljs-number">1</span>).fill(<span class="hljs-number">0</span>)
  dp[<span class="hljs-number">1</span>] = <span class="hljs-number">1</span>
  dp[<span class="hljs-number">2</span>] = <span class="hljs-number">1</span>
  <span class="hljs-keyword">for</span> (let i = <span class="hljs-number">3</span>; i &lt; dp.length; i++) {
    dp[i] = dp[i - <span class="hljs-number">1</span>] + dp[i - <span class="hljs-number">2</span>]
  }
  <span class="hljs-keyword">return</span> dp[n]
}</code></pre>

    </div><p>\u65F6\u95F4\u590D\u6742\u5EA6\u540C\u5907\u5FD8\u5F55\u89E3\u6CD5</p>
<ol start="4">
<li>\u72B6\u6001\u538B\u7F29</li>
</ol>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs">function fib(n) {
  <span class="hljs-keyword">if</span> (<span class="hljs-attr">n</span> === <span class="hljs-number">0</span>) return <span class="hljs-number">0</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">prev</span> = <span class="hljs-number">1</span>
  <span class="hljs-keyword">let</span> <span class="hljs-attr">cur</span> = <span class="hljs-number">1</span>

  for (<span class="hljs-keyword">let</span> <span class="hljs-attr">i</span> = <span class="hljs-number">3</span>; i &lt;= n; i ++) {
    <span class="hljs-keyword">let</span> <span class="hljs-attr">sum</span> = prev + cur
    <span class="hljs-attr">prev</span> = cur
    <span class="hljs-attr">cur</span> = sum
  }

  return cur
}</code></pre>

    </div><p>\u7A7A\u95F4\u590D\u6742\u5EA6\u964D\u4E3AO(1)</p>
<h2 id="\u6700\u4F18\u5B50\u7ED3\u6784 - \u51D1\u96F6\u94B1">\u6700\u4F18\u5B50\u7ED3\u6784 - \u51D1\u96F6\u94B1</h2><p>\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 coins \uFF0C\u8868\u793A\u4E0D\u540C\u9762\u989D\u7684\u786C\u5E01\uFF1B\u4EE5\u53CA\u4E00\u4E2A\u6574\u6570 amount \uFF0C\u8868\u793A\u603B\u91D1\u989D\u3002</p>
<p>\u8BA1\u7B97\u5E76\u8FD4\u56DE\u53EF\u4EE5\u51D1\u6210\u603B\u91D1\u989D\u6240\u9700\u7684 \u6700\u5C11\u7684\u786C\u5E01\u4E2A\u6570 \u3002\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u4E00\u79CD\u786C\u5E01\u7EC4\u5408\u80FD\u7EC4\u6210\u603B\u91D1\u989D\uFF0C\u8FD4\u56DE\xA0-1 \u3002</p>
<p>\u4F60\u53EF\u4EE5\u8BA4\u4E3A\u6BCF\u79CD\u786C\u5E01\u7684\u6570\u91CF\u662F\u65E0\u9650\u7684\u3002</p>
<p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09
\u94FE\u63A5\uFF1A<a href="https://leetcode-cn.com/problems/coin-change">https://leetcode-cn.com/problems/coin-change</a></p>
<p>\u793A\u4F8B1\uFF1A</p>

        <div class="md-code-hijs">
        <pre><code class="hljs">\u8F93\u5165\uFF1A<span class="hljs-attr">coins</span> = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">5</span>], <span class="hljs-attr">amount</span> = <span class="hljs-number">11</span>
\u8F93\u51FA\uFF1A<span class="hljs-number">3</span> 
\u89E3\u91CA\uFF1A<span class="hljs-number">11</span> = <span class="hljs-number">5</span> + <span class="hljs-number">5</span> + <span class="hljs-number">1</span></code></pre>

    </div><p>\u793A\u4F8B2\uFF1A</p>

        <div class="md-code-hijs">
        <pre><code class="hljs">\u8F93\u5165\uFF1A<span class="hljs-attr">coins</span> = [<span class="hljs-number">2</span>], <span class="hljs-attr">amount</span> = <span class="hljs-number">3</span>
\u8F93\u51FA\uFF1A-<span class="hljs-number">1</span></code></pre>

    </div><img src="./\u52A8\u6001\u89C4\u5212-\u51D1\u96F6\u94B1.png" style="width: 100%; max-width=500px"/>

<p>\u4EE3\u7801\u6F14\u793A:</p>

        <div class="md-code-hijs">
        <pre><code class="language-javascript hljs"><span class="hljs-comment">/**
 * <span class="hljs-doctag">@param <span class="hljs-type">{number[]}</span> <span class="hljs-variable">coins</span></span>
 * <span class="hljs-doctag">@param <span class="hljs-type">{number}</span> <span class="hljs-variable">amount</span></span>
 * <span class="hljs-doctag">@return <span class="hljs-type">{number}</span></span>
 */</span>
<span class="hljs-keyword">var</span> coinChange = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">coins, amount</span>) </span>{
    <span class="hljs-keyword">let</span> dp = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>(amount + <span class="hljs-number">1</span>).fill(amount + <span class="hljs-number">1</span>)

    dp[<span class="hljs-number">0</span>] = <span class="hljs-number">0</span> 

    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; dp.length; i ++) {
        <span class="hljs-keyword">for</span> (coin <span class="hljs-keyword">of</span> coins) {
            <span class="hljs-keyword">if</span> (i - coin &lt; <span class="hljs-number">0</span>) {<span class="hljs-keyword">continue</span>}
            dp[i] = <span class="hljs-built_in">Math</span>.min(dp[i], dp[i - coin] + <span class="hljs-number">1</span>)
        }
    }

    <span class="hljs-keyword">return</span> (dp[amount] === amount + <span class="hljs-number">1</span>) ? -<span class="hljs-number">1</span> : dp[amount]
};</code></pre>

    </div>`});n.render=a;n.mounted=()=>{};const r=[{text:"\u52A8\u6001\u89C4\u5212",level:1,raw:"\u52A8\u6001\u89C4\u5212"},{text:"\u4EC0\u4E48\u662F\u52A8\u6001\u89C4\u5212\u5462\uFF1F",level:2,raw:"\u4EC0\u4E48\u662F\u52A8\u6001\u89C4\u5212\u5462\uFF1F"},{text:"\u52A8\u6001\u89C4\u5212\u95EE\u9898\u7684\u7279\u5F81",level:2,raw:"\u52A8\u6001\u89C4\u5212\u95EE\u9898\u7684\u7279\u5F81"},{text:"\u91CD\u53E0\u5B50\u95EE\u9898",level:2,raw:"\u91CD\u53E0\u5B50\u95EE\u9898"},{text:"\u6700\u4F18\u5B50\u7ED3\u6784",level:2,raw:"\u6700\u4F18\u5B50\u7ED3\u6784"},{text:"\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B",level:2,raw:"\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B"},{text:"\u52A8\u6001\u89C4\u5212\u7684\u89E3\u9898\u601D\u60F3",level:2,raw:"\u52A8\u6001\u89C4\u5212\u7684\u89E3\u9898\u601D\u60F3"},{text:"\u91CD\u53E0\u5B50\u95EE\u9898\u4E3E\u4F8B - \u6590\u6CE2\u90A3\u5951\u6570\u5217",level:2,raw:"\u91CD\u53E0\u5B50\u95EE\u9898\u4E3E\u4F8B - \u6590\u6CE2\u90A3\u5951\u6570\u5217"},{text:"\u6700\u4F18\u5B50\u7ED3\u6784 - \u51D1\u96F6\u94B1",level:2,raw:"\u6700\u4F18\u5B50\u7ED3\u6784 - \u51D1\u96F6\u94B1"}],l=[{code:"yum install crontabs",infostring:""},{code:`cd /home/crontab_sh
vim svn_update.sh`,infostring:""},{code:"#! /bin/sh\necho `svn update /home/svn --username xxxxx --password xxx --no-auth-cache > /home/update-product.log`",infostring:""},{code:"crontab -e",infostring:""},{code:`*/1 * * * * root /root/home/crontab_sh/svn_update.sh
// \u4E00\u5206\u949F\u6267\u884C\u4E00\u6B21`,infostring:""},{code:"service crond restart",infostring:""},{code:`node_modules
\u2514\u2500 A1
   \u251C\u2500 index.js
   \u251C\u2500 package.json
   \u2514\u2500 node_modules
      \u2514\u2500 A2
         \u251C\u2500 index.js
         \u2514\u2500 package.json
      \u2514\u2500 lodash
         \u251C\u2500 index.js
         \u2514\u2500 package.json
\u2514\u2500 B1
   \u251C\u2500 index.js
   \u251C\u2500 package.json
   \u2514\u2500 node_modules
      \u2514\u2500 lodash
         \u251C\u2500 index.js
         \u2514\u2500 package.json`,infostring:""},{code:`<html lang="en">
  <head>
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"><\/script>
  </body>
</html>`,infostring:"html"},{code:`import { createApp } from "/node_modules/.vite/vue.js?v=xxx";
import App from "/src/App.vue?t=xxx";
createApp(App).mount("#app");`,infostring:"js"},{code:`import { createHotContext as __vite__createHotContext } from "/@vite/client";
import.meta.hot = __vite__createHotContext("/src/App.vue");
import { defineComponent as _defineComponent } from "/node_modules/.vite/vue.js?v=xxx";
// script
const _sfc_main = /* @__PURE__ */ _defineComponent({
  setup(__props, { expose }) {
    expose();
    const __returned__ = { HelloWorld };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
// templete
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(_Fragment, null, [
    _hoisted_1,
    _createVNode($setup["HelloWorld"], { msg: "Hello Vue 3 + TypeScript + Vite" })
  ], 64);
}
// style
import "/src/App.vue?vue&type=style&index=0&lang.css";
...`,infostring:"js"},{code:`const app = new Koa()

app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    ctx.type = 'text/html'
    ctx.body = fs.readFileSync('./index.html', 'utf-8')  
  }
})

app.listen(3000, () => {
  // server start
})`,infostring:"js"},{code:`app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    // ...
  } else if (url.endsWith('.js')) {
    const p = path.join(__dirname, url)
    ctx.type = 'text/javascript'
    ctx.body = fs.readFileSync(p, 'utf-8')
  }
})`,infostring:"js"},{code:`function rewriteImport(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0, s1){
    if (s1.startsWith('./') || s1.startsWith('/') || s1.startsWith('../')) {
      return s0
    } else {
      return \` from '/node_modules/\${s1}'\`
    }
  })
}

app.use(async (ctx) => {
  const url = ctx.request.url
  if (url === '/') {
    // ...
  } else if (url.endsWith('.js')) {
    // ...
    const ret = fs.readFileSync(p, 'utf-8')
    // \u91CD\u5199\u7B2C\u4E09\u65B9\u4F9D\u8D56\u5BFC\u5165\u8DEF\u5F84
    ctx.body = rewriteImport(ret)
  }
})`,infostring:"js"},{code:`// vite-test-plugin
export default function myPlugin() {
  const virtualFileId = '@test-virtual-plugin'
  return {
    name: 'test-virtual-plugin',
    resolveId(id) {
      // \u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u63D2\u4EF6\u72EC\u6709\u7684\u6807\u8BC6\uFF0C\u5F53\u67D0\u4E2A\u6A21\u5757\u6CA1\u6709\u63D2\u4EF6\u80FD\u5904\u7406\u7684\u65F6\u5019\u4F1A\u62A5\u6A21\u5757\u627E\u4E0D\u5230\u7684\u9519\u8BEF
      if (id === virtualFileId) {
          return virtualFileId
      }
    },
    load(id) {
      // \u6B64id\u662FresolveId\u4E2D\u8FD4\u56DE\u7684\uFF0C\u5FC5\u987B\u505A\u5224\u65AD\uFF0C\u5426\u5219\u6BCF\u4E2A\u6A21\u5757\u90FD\u5728\u8FD9\u91CC\u4F1A\u505A\u5904\u7406\uFF0C\u5C31\u4E71\u5957\u4E86
      if (id === virtualFileId) {
          return \`export const msg = "from virtual file"\`
      }
    }
  }
}

// vite.config.js
import vitePluginTest from './plugins/vite-plugin-test.js'
export default defineConfig({
  plugins: [vue(), vitePluginTest()]
})
`,infostring:"js"},{code:`const marked = require("marked");

export default function vitePluginMd2Vue(options?: OptionsObject) {
  return {
    name: "vitePluginMd2Vue",
    transform(src: string, id: string) {
      if (id.endsWith(".md")) {
        const markdownHtml = marked(src)
        return {
          code: \`import {h, defineComponent} from "vue";
          const _sfc_md = defineComponent({
            name: "Markdown",
          });
          
          const _sfc_render =() => {
            return h("div", {
              innerHTML: \${JSON.stringify(markdownHtml)},
            })
          };
          
          _sfc_md.render = _sfc_render
          _sfc_md.mounted = ()=>{
            \${mermaidRenderCode}
          }
          export default _sfc_md\`,
          map: null,
        };
      }
    },
  };
}`,infostring:"js"},{code:`sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`,infostring:""},{code:`sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!`,infostring:"mermaid"},{code:"git clone https://github.com/WangXueZhi/rayx-doc.git",infostring:"bash"},{code:"echo '# Hello docs' > docs/\u5F00\u59CB.md",infostring:"bash"},{code:`module.exports = {
    // \u9ED8\u8BA4\u9875\u9762\uFF0C\u7528\u4E8E\u5339\u914D / \u8DEF\u5F84
    defaultPage: '\u5F00\u59CB.md'
}`,infostring:"js"},{code:`yarn
yarn dev`,infostring:"bash"},{code:`module.exports = {
    // \u9875\u9762\u6743\u91CD
    weight: {
        '\u6307\u5357/\u5FEB\u901F\u4E0A\u624B': 99999
    }
}`,infostring:"js"},{code:`function fib(n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1

  return fib(n - 1) + fib(n - 2)
}`,infostring:"javascript"},{code:`function fib(n) {
  if (n === 0) return 0;

  const memoArr = []

  return helper(memoArr, n)

}

function helper(memoArr, n) {
  if (n === 1 || n === 2) return 1
  if (!memoArr[n]) {
    memoArr[n] = helper(memoArr, n - 1) + helper(memoArr, n - 2)
  }
  return memoArr[n]
}`,infostring:"javascript"},{code:`function fib(n) {
  if (n === 0) return 0
  let dp = new Array(n+1).fill(0)
  dp[1] = 1
  dp[2] = 1
  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}`,infostring:"javascript"},{code:`function fib(n) {
  if (n === 0) return 0
  let prev = 1
  let cur = 1

  for (let i = 3; i <= n; i ++) {
    let sum = prev + cur
    prev = cur
    cur = sum
  }

  return cur
}`,infostring:"javascript"},{code:`\u8F93\u5165\uFF1Acoins = [1, 2, 5], amount = 11
\u8F93\u51FA\uFF1A3 
\u89E3\u91CA\uFF1A11 = 5 + 5 + 1`,infostring:""},{code:`\u8F93\u5165\uFF1Acoins = [2], amount = 3
\u8F93\u51FA\uFF1A-1`,infostring:""},{code:`/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)

    dp[0] = 0 

    for (let i = 0; i < dp.length; i ++) {
        for (coin of coins) {
            if (i - coin < 0) {continue}
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }

    return (dp[amount] === amount + 1) ? -1 : dp[amount]
};`,infostring:"javascript"}];export{l as codeBlocks,n as default,r as headings};
