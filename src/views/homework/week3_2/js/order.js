import { ref } from 'vue';

const datas = ref([]);
const remark = ref('');
const total = ref(0);

export const order = {
	datas,
	remark,
	total,
};
