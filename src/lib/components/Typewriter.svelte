<script>
	export let text = '';
	export let speed = 50;

	let display = '';
	let i = 0;

	function type() {
		if (i < text.length) {
			display += text[i];
			i++;
			setTimeout(type, speed);
		}
	}

	type();
</script>

<span>{display}</span>
