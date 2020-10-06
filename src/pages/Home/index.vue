<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import Brand from '@/pages/Home/Brand'
import Floor from '@/pages/Home/Floor'
import Like from '@/pages/Home/Like'
import ListContainer from '@/pages/Home/ListContainer'
import Rank from '@/pages/Home/Rank'
import Recommend from '@/pages/Home/Recommend'
export default {
  name: 'Home',
  components:{
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    Recommend
  }
}
</script>

<style lang="less" scoped>

</style>
