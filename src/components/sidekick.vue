<template>
  <section class="sidekick">
    <div class="image" style="background-image: url('https://picsum.photos/600/300');"></div>
    <aside class="content">
      <h2>We are a social change charity, helping people to improve their livesthrough digital</h2>
      <p>We tackle the most pressing issues of out time, working with partners in thousands of communities accross the UK and further afield.</p>
      <RouterLink class="btn btn-alt" :to="{name: 'ContentPage', params:{contentId: 'about'}}">Learn more about us</RouterLink>
    </aside>
  </section>
</template>