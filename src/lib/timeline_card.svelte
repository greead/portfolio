<script lang="ts">
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
<div class="content">
  <img src="/{img}" alt="Logo"/>
  <p>{body}</p>
  <div class="keywords">
    <Tag {keywords}/>
  </div> 
</div>

<style>
* {
  padding:0px;
  margin:0px;
  box-sizing:border-box;
  font-family:'Poppins', sans-serif;
  perspective:800px;
}

.timeline ul li .content h3{
  color:green;
  font-size:17px;
  padding-top:5px;
}
.timeline ul li .content p{
  padding:5px 0px 15px 0px;
  font-size:15px;
  text-align: justify;
}

span {
  display:inline-block;
  /* background-color:rgba(152, 251, 152);
  border-radius:25px; */
  padding:2px 15px;
  font-size:15px;
  text-align:center;
  text-decoration: underline;
}

@media (max-width:300px){

  .timeline ul li .content h3{
    color:rgb(189, 253, 221);
    font-size:15px;
  }

}


img {
  height: 7em;
  float: right;
  border: 2px solid green;
  margin: 0px 0px 0px 8px;
}

</style>

