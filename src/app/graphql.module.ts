import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [BrowserModule, ApolloModule, HttpClientModule],
    providers: [
      {
        provide: APOLLO_OPTIONS,
        useFactory: (httpLink: HttpLink) => {
          return {
            cache: new InMemoryCache(),
            link: httpLink.create({
              //uri: 'https://101340403-comp3133-assignment1.cyclic.app/graphql',

            uri: 'https://101334946-comp3133-assignment-1.cyclic.app/graphql',
          
            }),
          };
        },
        deps: [HttpLink],
      },
    ],
  })

export class GraphQLModule {}