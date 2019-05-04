<template>
    <div class="app-side-bar">
        <form class="app-side-form">
            <b-tabs pills card vertical end class="app-side-bar-menu">
                <b-tab title="Frontend" active class="app-tabs">
                    <b-card class="app-profile-card">
                        <div v-for="item in itemMenuFront" :key="item.id" class="app-side-bar-card">
                            <label :for="item.for"
                                   class="app-side-bar-label">{{item.text}}</label>
                            <b-form-input :id="item.for"
                                          v-model="item.value"
                                          type="range"
                                          min="0"
                                          max="100"
                                          step="1"></b-form-input>
                            <div class="mt-2">Value: {{ item.value }}</div>
                        </div>
                    </b-card>
                </b-tab>
                <b-tab title="Backend">
                    <b-card class="app-profile-card">
                        <div v-for="item in itemMenuBack" :key="item.id" class="app-side-bar-card">
                            <label :for="item.for"
                                   class="app-side-bar-label">{{item.text}}</label>
                            <b-form-input :id="item.for"
                                          v-model="item.value"
                                          type="range"
                                          min="0"
                                          max="100"
                                          step="1"></b-form-input>
                            <div class="mt-2">Value: {{ item.value }}</div>
                        </div>
                    </b-card>
                </b-tab>
                <b-tab title="Data Bases">
                    <b-card class="app-profile-card">
                        <div v-for="item in itemMenuData" :key="item.id" class="app-side-bar-card">
                            <label :for="item.for"
                                   class="app-side-bar-label">{{item.text}}</label>
                            <b-form-input :id="item.for"
                                          v-model="item.value"
                                          type="range"
                                          min="0"
                                          max="100"
                                          step="1"></b-form-input>
                            <div class="mt-2">Value: {{ item.value }}</div>
                        </div>
                    </b-card>
                </b-tab>
            </b-tabs>
            <p class="app-categories-save-btn-wrapper">
                <button class="app-btn app-btn--success app-side-save-button">Save</button>
            </p>
        </form>
    </div>
</template>


<script>
export default {
    name: 'tabs',
    data() {
        return {
            value: 2,
            itemMenuFront: [
                {
                    text: 'HTML', for: 'range-1', value: ''
                },
                {
                    text: 'CSS', for: 'range-2', value: ''
                },
                {
                    text: 'JavaScript', for: 'range-3', value: ''
                },
                {
                    text: 'Vue JS', for: 'range-4', value: ''
                },
                {
                    text: 'Angular 2+', for: 'range-5', value: ''
                },
                {
                    text: 'React JS', for: 'range-6', value: ''
                }
            ],
            itemMenuBack: [
                {
                    text: 'Java', for: 'range-7', value: ''
                },
                {
                    text: 'Python', for: 'range-8', value: ''
                },
                {
                    text: 'Ruby', for: 'range-9', value: ''
                },
                {
                    text: 'C/C++', for: 'range-10', value: ''
                },
                {
                    text: 'PHP', for: 'range-11', value: ''
                },
                {
                    text: 'NodeJS', for: 'range-12', value: ''
                }
            ],
            itemMenuData: [
                {
                    text: 'Mongo BD', for: 'range-13', value: ''
                },
                {
                    text: 'SQLS', for: 'range-14', value: ''
                },
                {
                    text: 'Oracle', for: 'range-15', value: ''
                }
            ]
        }
    }
}
</script>

<style scoped>
    .app-profile-card {
        border: none;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .app-side-bar-card {
        border-bottom: 1px solid #959595;
    }

    .app-side-bar-card:first-of-type {
        border-top: 1px solid #959595;
    }

    .app-side-bar {
        margin-bottom: 10px;
    }

    .app-side-bar-label {
        color: #959595;
        width: 100%;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 1.5em;
        margin-top: 5px;
    }

    .mt-2 {
        color: #959595;
    }

    .app-categories-save-btn-wrapper {
        width: 30%;
    }
</style>

