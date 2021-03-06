import { Component, OnInit, Input } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { Observable } from 'rxjs';

import { MtxGridColumn, MtxGridColumnButton } from './grid.interface';
import { MtxGridService } from './grid.service';
import PhotoViewer from 'photoviewer';

@Component({
  selector: 'mtx-grid-cell',
  exportAs: 'mtxGridCell',
  templateUrl: './cell.component.html',
})
export class MtxGridCellComponent {
  /** Row data */
  @Input() rowData = {};

  /** Column definition */
  @Input() colDef: MtxGridColumn;

  get _colValue() {
    return this._dataGridSrv.getCellValue(this.rowData, this.colDef);
  }

  _viewer: PhotoViewer;

  constructor(private _dialog: MtxDialog, private _dataGridSrv: MtxGridService) {}

  _handleActionConfirm(
    event: MouseEvent,
    title: string | Observable<string>,
    description: string | Observable<string> = '',
    okColor: '' | 'primary' | 'accent' | 'warn' = 'primary',
    okText: string | Observable<string> = 'OK',
    closeColor: '' | 'primary' | 'accent' | 'warn' = '',
    closeText: string | Observable<string> = 'CLOSE',
    fn?: (p: any) => void,
    data?: any
  ) {
    event.preventDefault();
    event.stopPropagation();

    this._dialog.open({
      title,
      description,
      buttons: [
        {
          color: okColor,
          text: okText,
          onClick: () => (fn ? fn(data) : {}),
        },
        { color: closeColor, text: closeText, onClick: () => {} },
      ],
    });
  }

  _handleActionClick(event: MouseEvent, btn: MtxGridColumnButton, rowData: any) {
    event.preventDefault();
    event.stopPropagation();

    if (btn.click) {
      btn.click(rowData);
    }
  }

  /** Preview big image */
  _onPreview(urlStr: string, multi = false) {
    const imgs: PhotoViewer.Img[] = [];

    let options: PhotoViewer.Options = {};

    if (multi) {
      this._dataGridSrv.str2arr(urlStr).forEach((url, index) => {
        imgs.push({ title: index + 1 + '', src: url });
      });
    } else {
      this._dataGridSrv.str2arr(urlStr).forEach(url => {
        imgs.push({ src: url });
      });

      options = {
        title: false,
        footerToolbar: ['zoomIn', 'zoomOut', 'rotateRight', 'rotateLeft', 'actualSize'],
      };
    }

    this._viewer = new PhotoViewer(imgs, options);
  }
}
