export default class Product {
  constructor(id, ownerId, title, images, description, price) {
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    this.images = images;
    this.description = description;
    this.price = price;
  }
}
