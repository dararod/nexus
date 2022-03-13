<script>
  import ArrowDown from 'phosphor-svelte/lib/ArrowDown';
  import ArrowUp from 'phosphor-svelte/lib/ArrowUp';
  import ChatCircleText from 'phosphor-svelte/lib/ChatCircleText';
  import Share from 'phosphor-svelte/lib/Share';

  import Button from '$lib/components/Button.svelte';
</script>

<li class="bg-zinc-700 rounded px-2 mb-2 first:mt-2 last:mb-0">
  <header class="py-2 uppercase text-xs font-semibold">Esteban Borai on Videogames</header>
  <main class="pb-2">
    <p>
      La batalla de Palermo se libró en Sicilia en el año 250 a. C. durante la primera guerra púnica
      entre un ejército romano comandado por Lucio Cecilio Metelo y una fuerza cartaginesa dirigida
      por Asdrúbal. El contingente romano, compuesto por dos legiones, que defendía la ciudad de
      Panormo (en la actualidad Palermo) derrotó a un ejército cartaginés mucho más grande compuesto
      por 30 000 hombres y entre 60 y 142 elefantes de guerra.
    </p>
  </main>
  <footer class="flex justify-between items-center pb-2">
    <div class="flex">
      <Button icon={Share} label="Share" />
    </div>
    <div class="flex">
      <Button icon={ChatCircleText} label="Comment" />
      <Button icon={ArrowUp} label="Like" />
      <Button icon={ArrowDown} label="Dislike" />
    </div>
  </footer>
</li>
