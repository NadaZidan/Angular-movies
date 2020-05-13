import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { SendfeedbackComponent } from './sendfeedback/sendfeedback.component';
import { SendMessageComponent } from './send-message/send-message.component';


@NgModule({
  declarations: [SendfeedbackComponent, SendMessageComponent],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ],
  exports:[SendfeedbackComponent,SendMessageComponent]

})
export class ReviewsModule { }
