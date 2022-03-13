<script lang="ts">
  import NotePencil from 'phosphor-svelte/lib/NotePencil';

  import Avatar from './Avatar.svelte';
  import Button from './Button.svelte';
  import Divider from './Divider.svelte';

  import type { User } from '$lib/types/domain';

  const user: User = {
    id: 'cur93y',
    firstName: 'Esteban',
    lastName: 'Borai',
    avatar: {
      url: 'https://avatars.githubusercontent.com/u/34756077?v=4',
      height: 460,
      width: 460
    },
    username: 'estebanborai',
    email: 'estebanborai@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date()
  };
</script>

<aside
  class="bg-neutral-800 border-r border-neutral-700 md:col-span-2 lg:col-span-2 col-span-1 flex flex-col p-2 text-white"
>
  <div class="flex items-center">
    <Avatar {user} />
    <span class="flex ml-2">{user.firstName} {user.lastName}</span>
  </div>
  <Divider />
  <div class="flex flex-col justify-start">
    <Button fullWidth label="Publish" icon={NotePencil} variant="primary" />
  </div>
</aside>
