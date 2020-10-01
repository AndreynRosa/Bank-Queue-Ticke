package com.bank.queue.api.config;

import springfox.documentation.swagger2.annotations.EnableSwagger2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import static springfox.documentation.builders.PathSelectors.regex;

import java.util.ArrayList;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket productApi() {
        return new Docket(DocumentationType.SWAGGER_2).select()
                .apis(RequestHandlerSelectors.basePackage("com.bank.queue.api")).paths(regex("/api/v1/ticket.*")).build()
                .apiInfo(metaInfo());
    }

    private ApiInfo metaInfo() {

        ApiInfo apiInfo = new ApiInfo("Queue Banck Ticket API REST", "API REST de controle de filas.", "1.0",
                "Terms of Service",
                new Contact("Andrey Rosa", "", "andreynrosa@gmail.com"),
                "Apache License Version 2.0", "https://www.linkedin.com/in/andrey-rosa-b5601613a/", new ArrayList<VendorExtension>());

        return apiInfo;
    }

}
