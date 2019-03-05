import { Component, OnInit } from '@angular/core';
import { SetDynamicConfig, EditorState, selectConfig } from '../../store';
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
  uiModel: string;

  OnCodeChange() {
    this.store.dispatch(new SetDynamicConfig(this.uiModel));
  }

  ngOnInit() {
    // Set initial UI model state.
    this.store.pipe(select(selectConfig), first()).subscribe(config => {
      this.uiModel = config.uiModel;
    });
  }
}
