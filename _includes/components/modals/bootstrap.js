<script type="text/javascript">
  $('#bootstrapModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var modal = $(this)

    // Extract info from data-* attributes
    modal.find('.modal-title').text('Folio ' + button.data('id'))
    modal.find('#listItemCreatedBy').text(button.data('created-by'))
    modal.find('#listItemCreatedAt').text(button.data('created-at'))
    modal.find('#listItemProductDesc').text(button.data('product-desc'))
    modal.find('#listItemProductFlaw').text(button.data('product-flaw'))
    modal.find('#listItemProductManufacturer').text(button.data('product-manufacturer'))
    modal.find('#listItemProductModel').text(button.data('product-model'))
    modal.find('#listItemRepairCode').text(button.data('repair-code'))
    modal.find('#listItemSendParcel').text(button.data('send-parcel'))
    modal.find('#listItemSendTrackNum').text(button.data('send-track-num'))
    modal.find('#listItemReturnParcel').text(button.data('return-parcel'))
    modal.find('#listItemReturnTrackNum').text(button.data('return-track-num'))
    modal.find('#listItemSerialNum').text(button.data('serial-num'))
    modal.find('#listItemSolution').text(button.data('solution'))
    modal.find('#listItemStatus').text(button.data('status'))
    modal.find('#listItemSymptom').text(button.data('symptom'))
    modal.find('#listItemUpdatedBy').text(button.data('updated-by'))
    modal.find('#listItemAmount').text(button.data('amount'))
  })
</script>
