<template>
    <div>
        <header-image
            v-if="listing.images[0]"
            :image-url="listing.images[0]"
            @header-clicked="openModal"
            :id="listing.id"
        ></header-image>

        <div class="listing-container">

            <div class="heading">
                <h1>{{ listing.title }}</h1>
                <!--Vue text interpolation-->
                <p>{{ listing.address }}</p>
            </div>
            <hr>
            <div class="about">
                <h3>About this listing</h3>
                <expandable-text>{{ listing.about }}</expandable-text>
            </div>

            <div class="lists">
                <feature-list title="Amenities" :items="listing.amenities">
                    <template slot-scope="amenity">
                        <i class="fa fa-lg" :class="amenity.icon"></i>
                        <span>{{ amenity.title }}</span>
                    </template>
                </feature-list>

                <feature-list title="Prices" :items="listing.prices"> 
                    <template slot-scope="price">     
                       {{ price.title }}:<strong>{{ price.value }}</strong>
                    </template> 
                </feature-list> 
            </div> <!--end lists div -->
        </div> <!--end container div-->
        <modal-window ref="imagemodal">
           <image-carousel :images="listing.images"></image-carousel>
       </modal-window>
    </div>
</template>
<script>
    import { populateAmenitiesAndPrices } from '../js/helpers';
    let serverData = JSON.parse(window.vuebnb_server_data);
    let model = populateAmenitiesAndPrices(serverData.listing);

    import ImageCarousel from './ImageCarousel.vue';
    import ModalWindow from './ModalWindow.vue';
    import HeaderImage from './HeaderImage.vue';
    import FeatureList from './FeatureList.vue';
    import ExpandableText from './ExpandableText.vue';

    export default {
        components: {
            ImageCarousel,
            ModalWindow,
            HeaderImage,
            FeatureList,
            ExpandableText
        },
        computed: {
            listing() {
                return populateAmenitiesAndPrices(
                        this.$store.getters.getListing(this.$route.params.listing)
                );
            }
        },
        methods: {
            openModal() {
                this.$refs.imagemodal.modalOpen = true;
            }
        }
    }
</script>
<style>
    .about {
        margin-top: 2em 0;
    }

    .about h3 {
        font-size: 22px;
    }
</style>