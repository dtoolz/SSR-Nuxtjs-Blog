<template>
    <div>
         <SinglePost
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
import SinglePost from "../../components/SinglePost";

export default {
    components : {
        SinglePost
    },
    data: () => ({
      items: [
        {
          image: require("../../assets/images/m1.jpg"),
          title: 'Great Musical Orchestra in london',
          artist: 'dtoolz mass choir : songs from the midnight team',
          details: 'Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.',
          id: 'abc'
        }
      ]
    })
}
</script>