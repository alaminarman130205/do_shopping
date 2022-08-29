    const cartArray = [];

    function display(cartProduct){
        let totalPrice = 0;
        const tableBody = document.getElementById('cart_product');
        tableBody.innerHTML = "";
        for(let i=0; i<cartProduct.length; i++){

            const Pname = cartArray[i].productName;
            const pPrice = cartArray[i].productPrice;
            totalPrice +=pPrice;

            const tr = document.createElement('tr');
            tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${Pname}</td>
            <td>${pPrice}</td>
            `
            tableBody.appendChild(tr);
        }
        const tr = document.createElement('tr'); 
        tr.innerHTML = `
        <th></th>
        <td>total price </td>
        <td>${totalPrice}</td>        
                
        `
        tableBody.appendChild(tr);

    }


    function addtoCart(element){
        const productName = element.parentNode.parentNode.children[0].innerText; 
        const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
        const producobj = {
            productName:productName, 
            productPrice:parseFloat(productPrice),
        }
        cartArray.push(producobj);

        const productTotal = document.getElementById('total_product_num'); 
        productTotal.innerText = cartArray.length;

        display(cartArray);


    }
