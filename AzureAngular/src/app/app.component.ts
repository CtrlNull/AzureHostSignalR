import {
  Component
} from '@angular/core';
import {
  HubConnection
} from '@aspnet/signalr-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Azure-SignalR';
  private hubConnection: HubConnection;
  nick = '';
  message = '';
  messages: string[] = [];


  ngOnInit() {
    this.nick = window.prompt('Your name:', 'John');

    this.hubConnection = new HubConnection('http://localhost:5000/chat');

    this.hubConnection
      .start()
      .then(() => console.log('Connection Started:'))
      .catch(err => console.log('Error while establishing connection :('));

    this.hubConnection.on('sendToAll', (nick: string, receivedMessage: string) => {
      const text = `${nick}: ${receivedMessage}`;
      this.messages.push(text);
    });
  }
}
