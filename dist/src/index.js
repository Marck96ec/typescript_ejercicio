"use strict";
const newUID = () => Math.random().toString(36).slice(2);
class Factura {
    constructor() {
        this.productos = [];
        this.total = 0;
        this.subtotal = 0;
    }
    addproducto(producto) {
        this.subtotal += producto.precio * producto.cantidad;
        producto.precio += this.calimpuesto(producto);
        this.total += producto.precio * producto.cantidad;
        let totaprod = producto.precio * producto.cantidad;
        producto.ptotal = totaprod;
        this.productos.push(producto);
        console.log("Producto Agregado");
    }
    calimpuesto(producto) {
        let v_impuesto = producto.precio * 0.12;
        return v_impuesto;
    }
    i_subtotal() {
        console.log(`Subtotal: ${(this.subtotal).toFixed(2)}`);
    }
    i_total() {
        console.log(`Total: ${(this.total).toFixed(2)}`);
    }
    i_iva() {
        console.log(`IVA 12: ${(this.total - this.subtotal).toFixed(2)}`);
    }
    i_detalle() {
        this.productos.forEach((productos) => {
            console.log(`COD: ${productos.codigo}, Descripcion: ${productos.nom_prod}, PrecioU: ${(productos.precio).toFixed(2)},Cantidad: ${productos.cantidad}, Total: ${(productos.ptotal)}`);
        });
    }
}
const factura = new Factura();
factura.addproducto({ codigo: newUID(), cantidad: 1, nom_prod: "Agua", precio: 0.30 });
factura.addproducto({ codigo: newUID(), cantidad: 2, nom_prod: "Queso", precio: 1.00 });
factura.addproducto({ codigo: newUID(), cantidad: 3, nom_prod: "Yogurt", precio: 1.30 });
factura.addproducto({ codigo: newUID(), cantidad: 2, nom_prod: "Panes", precio: 0.30 });
factura.addproducto({ codigo: newUID(), cantidad: 1, nom_prod: "Yogurt", precio: 1.30 });
factura.i_detalle();
factura.i_subtotal();
factura.i_iva();
factura.i_total();
