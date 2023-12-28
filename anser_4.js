//React: 條件渲染

function ConditionalRendering({ isLoggedIn }) {
  return <>{isLoggedIn ? <div>已登入</div> : <div>尚未登入</div>}</>;
}
//若 isLoggedIn == true 渲染<p>已登入</p>
//若 isLoggedIn == false 渲染<p>尚未登入</p>
