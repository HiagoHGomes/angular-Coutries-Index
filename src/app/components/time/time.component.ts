import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  date: Date | undefined;
  hours: number | any;
  minutes: number | any;
  seconds: number | any;
  weekDay: number | string | undefined;
  greetings?: string;

  ngOnInit(): void {
    const time = interval(1000);
    time.subscribe(() => {
      this.date = new Date(); // Obtém a nova data e hora atual
      this.hours = this.date.getHours(); // Atualiza o valor das horas
      this.minutes = this.date.getMinutes(); // Atualiza o valor dos minutos
      this.seconds = this.date.getSeconds(); // Atualiza o valor dos segundos
      this.weekDay = this.date.getDay();

      if(this.hours < 10){
        this.hours = "0" + this.hours;
      }

      if(this.minutes < 10){
        this.minutes = "0" + this.minutes;
      }

      if(this.seconds < 10){
        this.seconds = "0" + this.seconds;
      }

      switch(this.weekDay){
        case 0:
          this.weekDay = 'Domingo';
          break;
        case 1:
            this.weekDay = 'Segunda-Feira';
            break;
        case 2:
              this.weekDay = 'Terça-Feira';
              break;
          case 3:
                this.weekDay = 'Quarta-Feira';
                break;
          case 4:
                  this.weekDay = 'Quinta-Feira';
                  break;
          case 5:
                    this.weekDay = 'Sexta-Feira';
                    break;
          case 6:
                      this.weekDay = 'Sabado';
                      break;
      };

      if (this.hours>=0 && this.hours<6) {
        //boa madrugada
        this.greetings = 'Boa madrugada!';

    }else if(this.hours>=6 && this.hours <12){
        //bom dia
        this.greetings = 'Bom dia!'
    }else if (this.hours>=12 && this.hours <18){
        //boa tarde
        this.greetings = 'Boa tarde!'
     
    }else{
        //boa noite
        this.greetings = 'Boa noite!'
    }
    });
  }
}
