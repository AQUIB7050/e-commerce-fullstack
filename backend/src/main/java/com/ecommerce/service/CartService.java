package com.ecommerce.service;

import com.ecommerce.exception.ProductException;
import com.ecommerce.model.Cart;
import com.ecommerce.model.User;
import com.ecommerce.requests.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
