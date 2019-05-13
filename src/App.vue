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
    .card .card-body {
        padding: 0;
    }

    .container-fluid .row {
        margin-bottom: 20px;
    }
    .col .input-group .form-control {
        border-radius: 50px 0 0 50px;
    }

    .col .input-group .btn {
        border-radius: 0 50px 50px 0;
    }

    .app-tabs .card {
        border: none;
    }
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

    .modal-open .modal {
        z-index: 1072;
    }

    .modal .modal-backdrop {
        background-color: rgba(0, 0, 0, 0.3);
        border: none;
    }

    @media screen and (min-width: 1200px) {
        .form-row .col-sm-3 {
           display: none;
       }

       .modal-open .modal {
            z-index: 1072;
        }

        .modal-backdrop {
            background-color: rgba(0, 0, 0, 0.3);
            border: none;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
        .form-row .col-sm-3 {
           display: none;
       }

       .modal-open .modal {
            z-index: 1072;
        }

        .modal-backdrop {
            background-color: rgba(0, 0, 0, 0.3);
            border: none;
        }
    }

    @media screen and (min-width: 420px) and (max-width: 768px) {
        .app-content {
            margin-top: 30px;
        }

        .form-row .col-sm-3 {
           display: none;
       }

       .modal-open .modal {
            z-index: 1072;
        }

        .modal-backdrop {
            background-color: rgba(0, 0, 0, 0.3);
            border: none;
        }
	
	.app-employee .container-fluid {
            margin-bottom: 30px;
        }
    }

   @media screen and (max-width: 420px) {
       .app-content .app-employee {
           width: 90%;
       }

       .app-content {
           margin-top: 80px;
       }

       .form-row .col-sm-3 {
           display: none;
       }

       .tabs .col-auto {
           width: 100%;
       }

       .modal-open .modal {
            z-index: 1072;
        }

        .modal-backdrop {
            background-color: rgba(0, 0, 0, 0.3);
            border: none;
        }
	
	.app-employee .container-fluid {
            margin-bottom: 90px;
        }

        .row .my-1 {
            margin: 0 auto;
        }
   }
</style>
