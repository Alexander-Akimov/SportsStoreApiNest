export class CreateProductDto {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly categoryId: string;
    readonly price: Number;
}