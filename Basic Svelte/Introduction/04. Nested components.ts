<script lang="ts">
	import Nested from './Nested.svelte';
</script>

<p>This is a paragraph.</p>
<Nested />

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>


//Component names are capitalized, to distinguish them from HTML elements.

//Notice that even though Nested.svelte has a <p> element, the styles from App.svelte don't leak in.
NOTE to self - have to reorganize this. didn't realize there were two files
