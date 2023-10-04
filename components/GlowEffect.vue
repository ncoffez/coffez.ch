<template>
	<div id="blur" ref="blur"></div>
	<div id="blob" ref="blob"></div>
</template>
<script setup>
const blob = ref(null);
const blur = ref(null);
const x = ref(0);
const y = ref(0);

const updatePosition = event => {
	const scrollY = window.scrollY || window.pageYOffset;
	const scrollX = window.scrollX || window.pageXOffset;

	x.value = event.clientX + scrollX;
	y.value = event.clientY + scrollY;
};

onMounted(() => {
	document.addEventListener('mousemove', updatePosition);
	document.addEventListener('wheel', updatePosition);
	blur.value.style.height = `${document.body.scrollHeight}px`;
});

watchEffect(() => {
	if (blob.value) {
		console.log(`👻 Shadow moved.`)
		blob.value.animate(
			{
				left: `${x.value}px`,
				top: `${y.value}px`,
			},
			{
				duration: 3000,
				fill: 'forwards',
			}
		);
	}
});

onBeforeUnmount(() => {
	document.removeEventListener('mousemove', updatePosition);
	document.removeEventListener('wheel', updatePosition);
});
</script>

<style lang="sass" scoped>
#blob
	background-color: white
	height: 34vmax
	aspect-ratio: 1
	position: absolute
	left: 50%
	top: 50%
	translate: -50% -50%
	border-radius: 50%
	background: linear-gradient(to right, #5e35b1, var(--primary))
	animation: rotate 20s infinite
	z-index: -3
	opacity: 0.8

#blur
	width: 100%
	height: 100px
	position: absolute
	top: 0
	left: 0
	backdrop-filter: blur(16vmax)
	z-index: -2


@keyframes rotate
	from
		rotate: 0deg

	50%
		scale: 1 1.5

	to
		rotate: 360deg
// Make background of article transparent

@media screen and (max-width: 1199px)
	#blob, #blur
		display: none
</style>
