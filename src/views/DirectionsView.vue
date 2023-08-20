<template>
  <div id="Directions">
    <div class="grid grid-cols-12 mt-4 shadow-md">
      <div class="col-span-2 mx-auto">
        <div @click="router.push('/')">
          <ArrowIcon :size="35" />
        </div>
        <div class="h-16 mt-4 w-full">
          <div :class="[ isPickupActive ? 'circle-black' : 'circle-gray' ]"></div>
          <div class="mx-auto w-[2px] h-[45px] bg-direction-background"></div>
          <div :class="[ !isPickupActive ? 'square-black' : 'square-gray' ]"></div>
        </div>
      </div>
      <div class="col-span-10 pr-4">
        <div class="w-full h-5"></div>
        <div class="mb-2 mt-5">
          <AutoCompleteInput
            the-id="firstInput"
            v-model:input="pickup"
            placeholder="Enter pick-up location"
            @clearInput = "clearInputFunc('firstInput')"
            @isActive="isPickupActive = true"
          />
        </div>
        <div class="mb-3">
          <AutoCompleteInput
            the-id="secondInput"
            v-model:input="destination"
            placeholder="Where to?"
            @clearInput = "clearInputFunc('secondInput')"
            @isActive="isPickupActive = false"
          />
        </div>
      </div>
    </div>
    <div v-for="address in addressData" :key="address"
      @click="storeAddress(address.description)">
      <div class="flex items-center border-b-[1px] ">
        <div class="bg-gray-400 mx-5 my-3.5 p-1.5 rounded-full">
          <MapMarkerIcon :size="30" fillColor="#f5f5f5"/>
        </div>
        <div>
          <div class="text-lg text-gray-600">{{ address.description }}</div>
          <div class="text-lg text-gray-400">{{ address.terms[2].value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { debounce } from 'lodash';
import axios from 'axios';

import ArrowIcon from 'vue-material-design-icons/ArrowLeft.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';
import { useRouter } from 'vue-router';
import { useDirectionStore } from '../stores/directionStore';

import AutoCompleteInput from '../components/AutoCompleteInput.vue';

const direction = useDirectionStore();
const router = useRouter();
const isPickupActive = ref(true);
const pickup = ref('');
const destination = ref('');
const addressData = ref('');

onMounted(() => {
  document.getElementById('firstInput').focus();
});

const clearInputFunc = (inputId) => {
  if (inputId === 'firstInput') {
    pickup.value = '';
    direction.pickup = '';
  } else {
    destination.value = '';
    direction.destination = '';
  }
};

const storeAddress = (address) => {
  if (isPickupActive.value) {
    direction.pickup = address;
    pickup.value = address;
    addressData.value = '';
  } else {
    direction.destination = address;
    destination.value = address;
  }

  if (direction.pickup.length > 0 && direction.destination.length > 0) {
    router.push('/map');
  }
};

// eslint-disable-next-line consistent-return
const findAddress = debounce(async (address) => {
  if (address === null || address === 'null' || address === '') {
    addressData.value = '';
    return '';
  }
  try {
    const res = await axios.get(`address/${address}`);
    addressData.value = res.data;
  } catch (err) {
    console.log(err);
  }
}, 300);

watch(pickup, async (pickupWatch) => findAddress(pickupWatch));
watch(destination, async (destinationWatch) => findAddress(destinationWatch));

</script>

<style lang="scss" scoped>
  .circle-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: #000;
    border-radius: 100%;
  }
  .circle-gray{
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
    border-radius: 100%;
  }

  .square-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: black;
    }

  .square-gray {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
  }

</style>
