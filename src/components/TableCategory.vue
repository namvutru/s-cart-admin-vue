<template>
    <div class="col-md-9">
        <b-table :items="items" :fields="fields">
            <template #cell(id)="">
                
            </template>

            <template #cell(action)="">

                <b-button title="Edit" class="justify-content-between align-items-center bg-white border-0">
                    <b-icon icon="pencil-square" variant="info" aria-hidden="true"></b-icon>
                </b-button>
                
                <b-button title="Delete" class="justify-content-between align-items-center bg-white border-0">
                    <b-icon icon="trash" variant="danger" aria-hidden="true"></b-icon>
                </b-button>
            </template>
        </b-table>
    </div>
</template>
  
<script>
export default {
    data() {
        return {


            fields: ['id', 'name', 'name_english', 'slug', 'categoryparent', 'image', 'status', 'created_at', 'updated_at', 'action'],
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
            ]
        }
    }
}
</script>