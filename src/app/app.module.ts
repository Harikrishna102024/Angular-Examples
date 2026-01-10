import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneWayComponent } from './Data Binding/one-way/one-way.component';
import { TwoWayComponent } from './Data Binding/two-way/two-way.component';
import { EventBindingComponent } from './Data Binding/event-binding/event-binding.component';
import { PropertyBindingComponent } from './Data Binding/property-binding/property-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassBindingComponent } from './Data Binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './Data Binding/style-binding/style-binding.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { StrecturalDirectiveComponent } from './Directive files/strectural-directive/strectural-directive.component';
import { AttributeDirectivesComponent } from './Directive files/attribute-directives/attribute-directives.component';
import { CustomeDirectivesComponent } from './Directive files/custome-directives/custome-directives.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ChildComponent } from './Component Communication/child/child.component';
import { ParentComponent } from './Component Communication/parent/parent.component';
import { VChildComponent } from './ViewChild-ViewChildren/v-child/v-child.component';
import { VParentComponent } from './ViewChild-ViewChildren/v-parent/v-parent.component';
import { DataTransformPipe } from './Pipes/data-transform.pipe';
import { AllpipesComponent } from './Pipes/allpipes/allpipes.component';
import { CChildComponent } from './ContentChild-ContentChildren/c-child/c-child.component';
import { CParentComponent } from './ContentChild-ContentChildren/c-parent/c-parent.component';
import { DemoServiceComponent } from './ServiceComponents/demo-service/demo-service.component';
import { NgOnChngesComponent } from './LifeCycle Hooks/ng-on-chnges/ng-on-chnges.component';
import { NgOnInitComponent } from './LifeCycle Hooks/ng-on-init/ng-on-init.component';
import { NgDoCheckComponent } from './LifeCycle Hooks/ng-do-check/ng-do-check.component';
import { NgaftercontentInitCheckedComponent } from './LifeCycle Hooks/ngaftercontent-init-checked/ngaftercontent-init-checked.component';
import { NgafterviewInitCheckedComponent } from './LifeCycle Hooks/ngafterview-init-checked/ngafterview-init-checked.component';
import { NgOnDistroyComponent } from './LifeCycle Hooks/ng-on-distroy/ng-on-distroy.component';
import { RoutingDemoComponent } from './Routing/routing-demo/routing-demo.component';
import { RoutingHomeComponent } from './Routing/routing-home/routing-home.component';
import { RoutingCourceComponent } from './Routing/routing-cource/routing-cource.component';
import { RoutingAdminComponent } from './Routing/routing-admin/routing-admin.component';
import { RoutingUsersComponent } from './Routing/routing-users/routing-users.component';
import { RoutParametersComponent } from './Routing/rout-parameters/rout-parameters.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RoutingQueryparamsComponent } from './Routing/routing-queryparams/routing-queryparams.component';
import { LoginComponent } from './Routing/login/login.component';
import { RegisterComponent } from './Routing/register/register.component';
import { LogOutComponent } from './Routing/log-out/log-out.component';
import { ObservablesComponent } from './rxjs/observables/observables.component';
import { SubscriberOneComponent } from './rxjs/Subject/subscriber-one/subscriber-one.component';
import { SubscriberTwoComponent } from './rxjs/Subject/subscriber-two/subscriber-two.component';
import { SubscriberThreeComponent } from './rxjs/Subject/subscriber-three/subscriber-three.component';
import { SubscriberComponent } from './rxjs/Subject/subscriber/subscriber.component';
import { SimpleSubjectComponent } from './rxjs/Subject/simple-subject/simple-subject.component';
import { BaseComponent } from './rxjs/Operators/base/base.component';
import { MainRxjsComponent } from './rxjs/Operators/main-rxjs/main-rxjs.component';
import { TemplateDrivenFormsComponent } from './Forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { GetComponent } from './HTTP/get/get.component';
import { PostComponent } from './HTTP/post/post.component';
import { PutComponent } from './HTTP/put/put.component';
import { PatchComponent } from './HTTP/patch/patch.component';
import { DeleteComponent } from './HTTP/delete/delete.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    OneWayComponent,
    TwoWayComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    HighlightDirective,
    StrecturalDirectiveComponent,
    AttributeDirectivesComponent,
    CustomeDirectivesComponent,
    TemplateReferenceComponent,
    ChildComponent,
    ParentComponent,
    VChildComponent,
    VParentComponent,
    DataTransformPipe,
    AllpipesComponent,
    CChildComponent,
    CParentComponent,
    DemoServiceComponent,
    NgOnChngesComponent,
    NgOnInitComponent,
    NgDoCheckComponent,
    NgaftercontentInitCheckedComponent,
    NgafterviewInitCheckedComponent,
    NgOnDistroyComponent,
    RoutingDemoComponent,
    RoutingHomeComponent,
    RoutingCourceComponent,
    RoutingAdminComponent,
    RoutingUsersComponent,
    RoutParametersComponent,
    RoutingQueryparamsComponent,
    LoginComponent,
    RegisterComponent,
    LogOutComponent,
    ObservablesComponent,
    SubscriberOneComponent,
    SubscriberTwoComponent,
    SubscriberThreeComponent,
    SubscriberComponent,
    SimpleSubjectComponent,
    BaseComponent,
    MainRxjsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    GetComponent,
    PostComponent,
    PutComponent,
    PatchComponent,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      closeButton: true,
      progressBar: true

    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
