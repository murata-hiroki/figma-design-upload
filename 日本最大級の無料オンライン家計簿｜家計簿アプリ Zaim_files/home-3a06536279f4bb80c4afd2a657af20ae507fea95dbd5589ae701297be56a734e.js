(function() {
  $(function() {
    var enableTooltip, form, reloadHome;
    $.modalEditBalance = function() {
      var modal;
      modal = $('#editBalanceModal');
      modal.find('.modal-body.content').hide();
      modal.find('.submit_spinner').hide();
      modal.modal('show');
      $('.modal-backdrop').on('click', function() {
        return $('.modal').modal('hide');
      });
      return $.ajax({
        type: "GET",
        url: $(this).data('url'),
        data: {
          balance: $(this).data('balance')
        },
        beforeSend: function() {
          return modal.find('.modal-body.spinner').show();
        },
        complete: function() {
          return modal.find('.modal-body.spinner').hide();
        },
        success: function(res) {
          modal.find('.modal-body.content').html(res).show();
          return modal.fitmodal();
        }
      });
    };
    $(window).on('load resize', function() {
      $('.home-headerbox').css('height', $('.cover img').height() + 50);
      $('.counter').css('left', $('.home-headerbox').width() - 270);
      $('.counter').css('top', $('.cover img').height() - 45);
      $('.home-status-progress dl').css('width', $('.home-status-progress').width() - 110);
      $('.home-status-progress dd.budget').css('left', $('.home-status-progress').width() - 95);
    });
    $('#recent-money').on('click', '.edit-money', $.modalEditMoney).on('click', '.popover-receipt', function(event) {
      return $(this).toggleSinglePopover(event, {
        placement: 'left'
      });
    });
    (enableTooltip = function() {
      return $('.recent-entry').find('.cell img.account').tooltip();
    })();
    form = $('#payment_form');
    form.on('ajax:success', (function(_this) {
      return function() {
        return form.triggerMoneyEvent('update');
      };
    })(this));
    form.on('ajax:error', (function(_this) {
      return function(event, xhr) {
        var detail, e, errors, errs;
        errs = [];
        if (xhr.status === 422) {
          errors = $.parseJSON(xhr.responseText);
          if ($.isEmptyObject(errors['errors'])) {
            errs.push({
              name: "general",
              message: '接続がタイムアウトしました'
            });
          } else {
            Object.keys(errors['errors']).forEach(function(name) {
              return errs.push({
                name: name,
                message: errors['errors'][name]
              });
            });
          }
        } else {
          errs.push({
            name: "general",
            message: '一時的な不具合により登録に失敗しました'
          });
        }
        event = null;
        detail = {
          errors: JSON.stringify(errs)
        };
        try {
          event = new CustomEvent('error_easy_input', {
            detail: detail
          });
        } catch (error) {
          e = error;
          event = document.createEvent('CustomEvent');
          event.initCustomEvent('error_easy_input', false, false, detail);
        }
        return window.dispatchEvent(event);
      };
    })(this));
    reloadHome = function(event) {
      var e;
      event.preventDefault();
      try {
        event = new CustomEvent('easy_input:update', null);
      } catch (error) {
        e = error;
        event = document.createEvent('CustomEvent');
        event.initCustomEvent('easy_input:update', false, false, null);
      }
      window.dispatchEvent(event);
      return $.getScript(window.location.href).done((function(_this) {
        return function() {
          $('.spinner').hide();
          $('#editModal,#inputModal').modal('hide');
          enableTooltip();
          $.notifyMoneyUpdate(event.type);
          return $(_this).find('.btn-input.btn-modal').removeAttr("disabled");
        };
      })(this)).fail((function(_this) {
        return function(jqxhr, settings, exception) {
          if (location.pathname !== "/home") {
            return window.location.reload();
          }
        };
      })(this));
    };
    return $(document).on('money:update', reloadHome).on('money:delete', reloadHome);
  });

  $(function() {
    var statusDiv;
    statusDiv = $('.home-status-progress');
    statusDiv.find('dd.progress').tooltip({
      toggle: 'tooltip',
      placement: 'bottom',
      container: '.home-status-progress'
    });
    $('.account-name').tooltip();
    return $('#list-accounts').on('click', '.edit-balance', $.modalEditBalance);
  });

}).call(this);
