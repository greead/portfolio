<script lang="ts">
  import {base} from '$app/paths'
  import Tag from "./tag.svelte";

  export let date = "2020"
  export let title = "Title"
  export let body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  export let img = "pfw.png"
  export let keywords = ["JavaScript", "HTML", "CSS"]
</script>


<div class="content">
    <h3>{title}</h3>
</div>
<span>{date}</span>
<div class="content bottom">
  <img src="{base}/{img}" alt="Logo"/>
  <p>{body}</p>
  <!-- <div class="keywords">
    <Tag {keywords}/>
  </div>  -->
</div>

<style>
* {
  padding:0px;
  margin:0px;
  box-sizing:border-box;
  perspective:800px;
}



.timeline ul li .content h3{
  font-size:17px;
  padding-top:5px;
  text-align: center;
}
.timeline ul li .content p{
  padding:5px 0px 15px 0px;
  font-size:15px;
  text-align: justify;
  line-height: 150%;
}

span {
  display:block;
  padding:2px 15px;
  font-size: 15px;
  text-align: center;
  text-decoration: underline;
}

@media (max-width:300px){

  .timeline ul li .content h3{
    color:rgb(189, 253, 221);
    font-size:15px;
  }

}


img {
  grid-area: 1 / 4 / 1 / 4;
  height: 7em;
  /* float: right; */
  border: 2px solid green;
  margin: 0px 0px 0px 8px;
}

.keywords {
  margin-top: 8px;
  grid-area: 3 / 1 / 3 / 4;
}

p {
  grid-area: 1 / 1 / 2 / 4;
}

.bottom {
  display: grid;
}

</style>

