<script lang="ts">
  import { newForm } from 'manzana';
  import { createEventDispatcher } from 'svelte';

  import Input from '$lib/components/Input.svelte';
  import { userService } from '$lib/services/user';
  import { UniqueError } from '$lib/errors/UniqueError';
  import FormButton from '$lib/components/FormButton.svelte';

  let error = null;

  const dispatch = createEventDispatcher();
  const now = new Date();
  const { handleSubmit, values } = newForm<{
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    birthdate: Date;
  }>({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      birthdate: new Date()
    },
    onSubmit: async (values) => {
      try {
        error = null;

        const birthdate = new Date(values.birthdate).toJSON();

        await userService.accountRegister({
          name: values.name,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          username: values.username,
          birthdate
        });
      } catch (err) {
        if (err instanceof UniqueError) {
          error = `El campo ${err.field} debe ser unico.`;
          return;
        }

        // TODO: Show general error
      }
    }
  });
</script>

<div>
  <form on:submit={handleSubmit}>
    <fieldset class="md:grid md:grid-cols-2 md:gap-4">
      <Input type="text" label="Name" name="name" bind:value={$values.name} />
      <Input type="text" label="Last name" name="lastName" bind:value={$values.lastName} />
    </fieldset>
    <fieldset class="md:grid md:grid-cols-2 md:gap-4">
      <Input type="email" label="Email" name="email" bind:value={$values.email} />
      <Input type="text" label="Username" name="username" bind:value={$values.username} />
    </fieldset>
    <fieldset class="md:grid md:grid-cols-2 md:gap-4">
      <Input type="password" label="Password" name="password" bind:value={$values.password} />
      <Input
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        bind:value={$values.confirmPassword}
      />
    </fieldset>
    <fieldset class="md:grid md:grid-cols-2 md:gap-4">
      <Input type="date" label="Birthdate" name="birthdate" bind:value={$values.birthdate} />
    </fieldset>
    <p class="text-red-600" class:hidden={!error}>
      {error}
    </p>
    <fieldset class="md:grid md:grid-cols-2 md:gap-4 my-2">
       <FormButton>SignUp</FormButton>
      <FormButton on:click={() => dispatch('toggleForm')}>Login into your account</FormButton>
    </fieldset>
  </form>
</div>
