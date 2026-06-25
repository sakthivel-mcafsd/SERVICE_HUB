import { Component } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  messages = [

    {
      sender:'provider',
      text:"Hi! I'm Arun, your HVAC technician. How can I help you today?",
      time:'10:20 AM'
    },

    {
      sender:'user',
      text:'Hi Arun, my AC is not cooling properly.',
      time:'10:21 AM'
    },

    {
      sender:'provider',
      text:'Could you share a few details?',
      time:'10:22 AM'
    },

    {
      sender:'user',
      text:"It's a 1.5 ton split AC, around 3 years old.",
      time:'10:23 AM'
    },
     {
      sender:'provider',
      text:'Could you share a few details?',
      time:'10:22 AM'
    },

    {
      sender:'user',
      text:"It's a 1.5 ton split AC, around 3 years old.",
      time:'10:23 AM'
    },
     {
      sender:'provider',
      text:'Could you share a few details?',
      time:'10:22 AM'
    },

    {
      sender:'user',
      text:"It's a 1.5 ton split AC, around 3 years old.",
      time:'10:23 AM'
    }

  ];

}