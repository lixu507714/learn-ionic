export class SettingsService {
  private altBackground = false;

  setBackground(isAll : boolean) {
    this.altBackground = isAll;
  }

  isAltBackground() {
    return this.altBackground;
  }
}
