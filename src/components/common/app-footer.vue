<template>
    <div class="app-footer">
        <span class="app-footer-name">&copy; Mameko Daria</span>
        <ul class="app-footer-menu">
            <li :key="item.id"
                class="app-footer-menu-item"
                v-for="item in iconsMenu">
                <a :href="item.href" :id="item._id" :name="item.name" class="app-footer-menu-link">
                    <img :alt="item.alt"
                         :src="item.src"
                         class="app-footer-menu-icon">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'app-footer',
		data() {
			return {
				iconsMenu: [
					{
						src: 'https://img.icons8.com/metro/26/000000/facebook.png',
						alt: 'Facebook',
						name: 'fb_share',
						href: 'http://www.facebook.com/sharer.php?u=http://localhost:8080',
						_id: 'share'
					}
				]
			}
		}
	};
</script>

<style scoped>
    .app-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .app-footer-menu {
        list-style: none;
    }
</style>
