<template>
    <div class="google-map" id="map"></div>
</template>

<script>
	let isAlreadyLoaded = false;

	export default {
		name: "google-map",
		props: {
			key111: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				onLoadLn: null,
				scriptEl: null
			};
		},
		created() {
			this.onLoadLn = this.applyMap.bind(this);
		},
		destroyed() {
			if (this.scriptEl) {
				this.scriptEl.removeEventListener("load", this.onLoadLn);
			}
		},
		mounted() {
			if (isAlreadyLoaded) {
				this.applyMap();
				return;
			} else {
				this.scriptEl = document.createElement("script");
				this.scriptEl.type = 'text/javascript';
				this.scriptEl.src = `https://maps.googleapis.com/maps/api/js?key=${this.key111}`;
				this.scriptEl.addEventListener("load", this.onLoadLn);
				document.head.appendChild(this.scriptEl);
			}
		},
		methods: {
			applyMap() {
				const {google} = window;
				const center = {
					lat: 50.4495911,
					lng: 30.4559864
				};
				const map = new google.maps.Map(document.getElementById('map'), {
					center,
					scrollwheel: false,
					zoom: 17
				});
				const marker = new google.maps.Marker({
					position: center,
					map,
					title: 'We are here!'
				});

				isAlreadyLoaded = true;
			}
		}
	};
</script>

<style scoped>
    .google-map {
        width: 100%;
        height: 500px;
    }
</style>
