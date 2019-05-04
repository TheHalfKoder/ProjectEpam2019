<template>
    <div class="app-main" id="app">
        <div class="app-header-wrapper">
            <app-header/>
        </div>
        <div class="app-content-wrapper">
            <div class="app-content">
                <router-view/>
            </div>
        </div>
        <div class="app-footer-wrapper">
            <app-footer/>
        </div>
    </div>
</template>

<script>
	import AppHeader from './components/common/app-header';
	import AppFooter from './components/common/app-footer';

	export default {
		name: 'App',
		components: {
			AppFooter,
			AppHeader
		}
	}
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .app-main {
        display: flex;
        flex-direction: column;
    }
</style>
