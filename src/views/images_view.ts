import Image from '../models/Image'

//adicionado encodeUriComponent para resolver problemas com espaços no nome das images
export default {
    render(image: Image) {
        return {
            id: image.id,
            url: process.env.URL_IMAGES + encodeURIComponent(image.path),
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image))
    },
}