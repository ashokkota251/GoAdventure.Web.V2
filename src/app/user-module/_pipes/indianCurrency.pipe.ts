import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({ name: 'indianCurrency' })
export class IndianCurrency implements PipeTransform {
  transform(value: number, isSymbol: boolean = false, decPointer: string, isPrefix: boolean = true): string {

    if (!isNaN(value)) {
      var currencyText = (isSymbol ? 'Rs. ' : 'INR');


      var decimalPipe = new DecimalPipe('en-IN');
      var InitialResult = decimalPipe.transform(value, decPointer);

      if (!isPrefix)
        return currencyText + ' ' + InitialResult + ' /-';

      return currencyText + ' ' + InitialResult + ' /-'

    }

  }
}
