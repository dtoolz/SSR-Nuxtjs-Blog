<template>
  <div class="mt-12 pt-6 mb-12 pb-12">
    <h3 class="text-center py-4 text-uppercase">Articles</h3>
    <AllPost
       v-for="item in items"
          :key="item.id"
          :image="item.image"
          :title="item.title"
          :artist="item.artist"
          :details="item.details"
          :id="item.id"
    />
  </div>
</template>


<script>
import AllPost from "../../components/AllPost"

  export default {
     components: {
        AllPost
     },
    data: () => ({
      items: [
        {
          image: require("../../assets/images/m1.jpg"),
          title: 'Great Musical Orchestra in london',
          artist: 'dtoolz mass choir : songs from the midnight team',
          details: 'Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.',
          id: 'abc'
        },
        {
          image: require("../../assets/images/m2.jpg"),
          title: 'Intriguing Season Of The EUFA Champions League',
          artist: 'Oghenerhioke Donatus',
          details: 'Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.',
          id: 'abcd'
        },
        {
          image: require("../../assets/images/m3.jpg"),
          title: 'COVID-19 Aids African Leaders To Steal Funds',
          artist: 'cnn, bbc, sahara reporters, news daily',
          details: 'Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.',
          id: 'abcde'
        },
        {
          image: require("../../assets/images/m4.jpg"),
          title: 'Digital Age Promotes E-commerce Market Globally',
          artist: 'Dtoolz Rhioke',
          details: 'Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.',
          id: 'abcdef'
        }
      ],
    }),
  }
</script>