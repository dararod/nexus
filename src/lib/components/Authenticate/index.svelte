<script lang="ts">
  import Login from './Login.svelte';
  import SignUp from './SignUp.svelte';

  let isLogin = false;

  function handleToggleForm() {
    isLogin = !isLogin;
  }
</script>

<div class="px-8 py-6 mt-4 text-left bg-white shadow-lg transition">
  <h3 class="text-2xl font-bold text-center">
    {#if isLogin}
      Login into your account
    {:else}
      Create an account
    {/if}
  </h3>
  {#if isLogin}
    <Login on:toggleForm={handleToggleForm} />
  {:else}
    <SignUp on:toggleForm={handleToggleForm} />
  {/if}
</div>
