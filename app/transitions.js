export default function() {
  this.transition(
    this.hasClass('liquid-dialog-container'),
    this.use(
      'explode',
      {
        pick: '.ember-modal-overlay',
        use: ['fade', { maxOpacity: 0.5 }]
      },
      {
        pick: '.ember-modal-dialog',
        use: ['to-up']
      }
    )
  );
}
