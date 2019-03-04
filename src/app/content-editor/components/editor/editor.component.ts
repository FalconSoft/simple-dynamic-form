import { Component, OnInit } from '@angular/core';
import { DynamicConfig, EditorState, selectConfig } from '../../store';
import { Store, select } from '@ngrx/store';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private store: Store<EditorState>) { }

  editorOptions = {language: 'json', automaticLayout: true};
  uiModel;

  OnCodeChange(evt) {
    this.store.dispatch(new DynamicConfig(this.uiModel));
  }

  ngOnInit() {
    this.store.pipe(select(selectConfig), first()).subscribe(config => {
      this.uiModel = config.uiModel;
    });
  }

}
