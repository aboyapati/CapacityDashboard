import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import * as XLSXStyle from 'xlsx-style';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

    // number of indexes/colomns
    // var cols = Object.keys(json[1]).length;

    // for (let i = 0; i < cols; i++) {
    //   var field = this.colName(i);
    //   console.log(field);
    //   this.wrapAndCenterCell(worksheet.C1);
    // }


    if (worksheet.A1) {
      this.wrapAndCenterCell(worksheet.A1);
    }
    if (worksheet.B1) {
      this.wrapAndCenterCell(worksheet.B1);
    }
    if (worksheet.C1) {
      this.wrapAndCenterCell(worksheet.C1);
    }
    if (worksheet.D1) {
      this.wrapAndCenterCell(worksheet.D1);
    }
    if (worksheet.E1) {
      this.wrapAndCenterCell(worksheet.E1);
    }
    if (worksheet.F1) {
      this.wrapAndCenterCell(worksheet.F1);
    }
    if (worksheet.G1) {
      this.wrapAndCenterCell(worksheet.G1);
    }
    if (worksheet.H1) {
      this.wrapAndCenterCell(worksheet.H1);
    }
    if (worksheet.I1) {
      this.wrapAndCenterCell(worksheet.I1);
    }
    if (worksheet.J1) {
      this.wrapAndCenterCell(worksheet.J1);
    }
    if (worksheet.K1) {
      this.wrapAndCenterCell(worksheet.K1);
    }
    if (worksheet.L1) {
      this.wrapAndCenterCell(worksheet.L1);
    }
    if (worksheet.M1) {
      this.wrapAndCenterCell(worksheet.M1);
    }
    if (worksheet.N1) {
      this.wrapAndCenterCell(worksheet.N1);
    }
    if (worksheet.O1) {
      this.wrapAndCenterCell(worksheet.O1);
    }
    if (worksheet.P1) {
      this.wrapAndCenterCell(worksheet.P1);
    }
    if (worksheet.Q1) {
      this.wrapAndCenterCell(worksheet.Q1);
    }
    if (worksheet.R1) {
      this.wrapAndCenterCell(worksheet.R1);
    }
    if (worksheet.S1) {
      this.wrapAndCenterCell(worksheet.S1);
    }
    if (worksheet.T1) {
      this.wrapAndCenterCell(worksheet.T1);
    }
    if (worksheet.U1) {
      this.wrapAndCenterCell(worksheet.U1);
    }
    if (worksheet.V1) {
      this.wrapAndCenterCell(worksheet.V1);
    }
    if (worksheet.W1) {
      this.wrapAndCenterCell(worksheet.W1);
    }
    if (worksheet.X1) {
      this.wrapAndCenterCell(worksheet.X1);
    }
    if (worksheet.Y1) {
      this.wrapAndCenterCell(worksheet.Y1);
    }
    if (worksheet.Z1) {
      this.wrapAndCenterCell(worksheet.Z1);
    }
    if (worksheet.AA1) {
      this.wrapAndCenterCell(worksheet.AA1);
    }
    if (worksheet.AB1) {
      this.wrapAndCenterCell(worksheet.AB1);
    }
    if (worksheet.AC1) {
      this.wrapAndCenterCell(worksheet.AC1);
    }
    if (worksheet.AD1) {
      this.wrapAndCenterCell(worksheet.AD1);
    }

    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    // Use XLSXStyle instead of XLSX write function which property writes cell styles.
    const excelBuffer: any = XLSXStyle.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  // private colName(n) {
  //   var ordA = 'A'.charCodeAt(0);
  //   var ordZ = 'Z'.charCodeAt(0);
  //   var len = ordZ - ordA + 1;

  //   var s = "";
  //   while (n >= 0) {
  //     s = String.fromCharCode(n % len + ordA) + s;
  //     n = Math.floor(n / len) - 1;
  //   }
  //   return s + '1';
  // }

  private wrapAndCenterCell(cell: XLSX.CellObject) {

    const wrapAndCenterCellStyle = { alignment: { wrapText: true, vertical: 'center', horizontal: 'center' }, font: { bold: true } };
    this.setCellStyle(cell, wrapAndCenterCellStyle);
  }

  private setCellStyle(cell: XLSX.CellObject, style: {}) {
    cell.s = style;
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }

}
