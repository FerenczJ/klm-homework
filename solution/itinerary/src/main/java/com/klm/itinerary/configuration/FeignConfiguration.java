package com.klm.itinerary.configuration;

import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients("com.klm.itinerary.feign.client")
public class FeignConfiguration {
}
